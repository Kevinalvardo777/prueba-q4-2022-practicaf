import { render, screen } from "@testing-library/react"
import { Input } from './input'
import userEvent from '@testing-library/user-event'

describe("Input tests", () => {
    const fnInput = jest.fn()
    it("should show error message", () => {
        render(<Input onChange={fnInput}  errorMessage="error" placeholder="testError"/>)

        const input = screen.getByRole("textbox")
        const errorMessage = screen.getByText('error')
        
        expect(input).toBeInTheDocument()
        expect(input).toHaveClass("input__wrapper__field--error")
        expect(errorMessage).toBeInTheDocument()
    })

    it('should call onChange', async () => {
        const user = userEvent.setup()
        render(<Input onChange={fnInput} />)
        const input = screen.getByRole('textbox')
    
        expect(fnInput).toBeCalledTimes(0)
    
        await user.type(input, 'test')
    
        expect(fnInput).toBeCalledTimes(4)
      })

    it('should not show error message', () => {
       render(<Input onChange={fnInput} />)
        const errorMessage = screen.queryByText('error')
        expect(errorMessage).not.toBeInTheDocument()
    })

})