import { render, screen } from "@testing-library/react";
import { Alert } from "./alert";

describe('Alert tests', () => {
    it("should not render alert", () => {
        render(<Alert >éxito</Alert>)
        const alert = screen.getByText("éxito")
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveClass("alert__wrapper alert--hide")
    })

    it("should render a successfull alert", () => {
        render(<Alert show={true}>éxito</Alert>)
        const alert = screen.getByText("éxito")
        const successImg = screen.getByRole("img", {name: /success/i })
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveClass("alert--success alert--animation")
        expect(successImg).toBeInTheDocument()
    })

    it('should render an error alert', () => { 
        render(<Alert type="error" show={true}>error</Alert>)
        const alert = screen.getByText("error")
        const errorImg = screen.getByRole("img", {name: /error/i })
        expect(alert).toBeInTheDocument()
        expect(alert).toHaveClass("alert--error")
        expect(errorImg).toBeInTheDocument()
    })
});