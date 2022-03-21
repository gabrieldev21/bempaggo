import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Checkout from "..";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Checkout />", () => {
  it("Should render Checkout with values", () => {
    render(
      <MemoryRouter
        initialEntries={[
          "/checkout",
          {
            state: {
              comment: "I expect its works!",
              qttTag: 3,
              tagNames: ["React", "Angular", "Vue"],
            },
          },
        ]}
      >
        <Checkout />
      </MemoryRouter>
    );
    expect(screen.getByText("Formulário para compra de")).toBeInTheDocument();
    expect(screen.getByText("pacote de adesivos")).toBeInTheDocument();
    expect(screen.getByAltText("boxImage")).toBeInTheDocument();

    expect(screen.getByText("Produto")).toBeInTheDocument();
    expect(screen.getByText("Comentário")).toBeInTheDocument();
    
    expect(
      screen.getByRole("button", { name: "Finalizar" })
    ).toBeInTheDocument();

    expect(screen.getByText("3 x React")).toBeInTheDocument();
    expect(screen.getByText("3 x Angular")).toBeInTheDocument();
    expect(screen.getByText("3 x Vue")).toBeInTheDocument();
    expect(screen.getByText("I expect its works!")).toBeInTheDocument();
  });

  it("Should redirect to Home", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("button", { name: "Finalizar" }));
    expect(mockedUsedNavigate).toBeCalledWith("/");
  });
});
