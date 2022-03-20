import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Home from "..";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Home />", () => {
  it("Should render home with all inputs and buttons", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Formulário para compra de")).toBeInTheDocument();
    expect(screen.getByText("pacote de adesivos")).toBeInTheDocument();

    expect(screen.getByText("Quais adesivos:")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Angular")).toBeInTheDocument();
    expect(screen.getByText("Vue")).toBeInTheDocument();

    expect(screen.getByText("Quantos adevisos de cada?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();

    expect(screen.getByText("Comentários?")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Alguma dúvida? Recado?")
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "ENVIAR" })).toBeInTheDocument();
  });

  it("Should control tag quantify", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("quantify")).toHaveTextContent("1");

    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByLabelText("quantify")).toHaveTextContent("1");

    userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByLabelText("quantify")).toHaveTextContent("2");

    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByLabelText("quantify")).toHaveTextContent("3");
  });
  it("Should send data to checkout", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("checkbox", { name: "React" }));
    userEvent.click(screen.getByRole("checkbox", { name: "Angular" }));
    userEvent.click(screen.getByRole("checkbox", { name: "Vue" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.click(screen.getByRole("button", { name: "+" }));
    userEvent.type(
      screen.getByPlaceholderText("Alguma dúvida? Recado?"),
      "I expect its works!"
    );
    userEvent.click(screen.getByRole("button", { name: "ENVIAR" }));
    expect(mockedUsedNavigate).toBeCalledWith("/checkout", {"state": {"comment": "I expect its works!", "qttTag": 3, "tagNames": ["React", "Angular", "Vue"]}});
  });
});
