import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import userEvent from "@testing-library/user-event";

describe("Button Tests", () => {
  it("should render medium button by default", () => {
    render(<Button onClick={() => {}}>Medium</Button>);

    const button = screen.getByRole("button", { name: "Medium" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn--medium");
  });

  it("should render small button", () => {
    render(
      <Button size="small" onClick={() => {}}>
        Small
      </Button>
    );
    const button = screen.getByRole("button", { name: "Small" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn--small");
  });

  it("should render primary button by default", () => {
    render(<Button onClick={() => {}}>Primary</Button>);

    const button = screen.getByRole("button", { name: "Primary" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn--primary");
  });

  it("should render secondary button", () => {
    render(
      <Button type="secondary" onClick={() => {}}>
        Secondary
      </Button>
    );
    const button = screen.getByRole("button", { name: "Secondary" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn--secondary");
  });

  it("should execute received callback", async () => {
    const testFn = jest.fn();
    const user = userEvent.setup();
    render(
      <Button size="medium" onClick={testFn}>
        Medium
      </Button>
    );

    const button = screen.getByRole("button", { name: "Medium" });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(testFn).toHaveBeenCalledTimes(1);
  });
});
