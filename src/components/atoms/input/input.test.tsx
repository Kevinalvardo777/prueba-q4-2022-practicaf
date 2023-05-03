import { render, screen } from "@testing-library/react"
import { Input } from './input'
// import {getRoles} from '@testing-library/dom'

describe("Input tests", () => {
    const fnInput = jest.fn()
    it("should show error message", () => {
        // const {container} = 
        render(<Input onChange={fnInput}  errorMessage="error" placeholder="testError"/>)
        
        // getRoles(container)

        const input = screen.getByRole("textbox",{name: "testError"})
        
        expect(input).toBeInTheDocument()
        expect(input).toHaveClass("input-wrapper__field--error")
        //expect(true).toBeTruthy()
    })

    // it('should show error message', () => {
    //     render(<Input onChange={fnInput} error="error" />)
    //     const errorMessage = screen.getByText('error')
    //     expect(errorMessage).toBeInTheDocument()
    //   })
})