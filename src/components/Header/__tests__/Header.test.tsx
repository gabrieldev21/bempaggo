import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "..";

describe("<Header />", () => {
  it("Should render header with all atributtes", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("Formulário para compra de")).toBeInTheDocument();
    expect(screen.getByText("pacote de adesivos")).toBeInTheDocument();
    expect(screen.getByAltText("boxImage")).toBeInTheDocument();
  });
});
