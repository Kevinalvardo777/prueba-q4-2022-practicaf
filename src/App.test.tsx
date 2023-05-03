import { render, screen } from "@testing-library/react";
import App from "./app-base";

describe("App component", () => {
  it("Should render the title", () => {
    render(<App />);

    const title = screen.getByText("Evaluación Técnica Q4 2022");
    expect(title).toBeInTheDocument();
  });

  it("Should render Colores section", () => {
    const { container } = render(<App />);

    const titleColors = screen.getByText("Colores");
    expect(titleColors).toBeInTheDocument();

    const mainColor = screen.getByText("Principal");
    expect(mainColor).toBeInTheDocument();

    const color = container.getElementsByClassName("app__color--main");
    expect(color).toBeDefined();

    const mainColorHexa = screen.getByText("#B234B1");
    expect(mainColorHexa).toBeInTheDocument();

    const backgroundColor = screen.getByText("Fondo");
    expect(backgroundColor).toBeInTheDocument();

    const background = container.getElementsByClassName(
      "app__color--background"
    );
    expect(background).toBeDefined();

    const backgroundColorHexa = screen.getByText("#1C1C1C");
    expect(backgroundColorHexa).toBeInTheDocument();
  });

  it("Should render Íconos section", () => {
    render(<App />);

    const deleteIcon = screen.getByText("Delete icon");
    expect(deleteIcon).toBeInTheDocument();

    const imageDeleteIcon = screen.getByAltText("Delete icon");
    expect(imageDeleteIcon).toBeInTheDocument();

    const warningIcon = screen.getByAltText("Warning icon");
    expect(warningIcon).toBeInTheDocument();

    const imageWarningIcon = screen.getByAltText("Warning icon");
    expect(imageWarningIcon).toBeInTheDocument();
  });

  it("Should render API REST section", () => {
    render(<App />);

    const title = screen.getByText("API REST");
    expect(title).toBeInTheDocument();

    const link = screen.getByText("Documentación de la API REST");
    expect(link).toBeInTheDocument();
  });

  it("Should render GIFs section", () => {
    render(<App />);

    const title = screen.getByText("GIFs");
    expect(title).toBeInTheDocument();

    const link = screen.getByText("Página de GIFs");
    expect(link).toBeInTheDocument();
  });
});
