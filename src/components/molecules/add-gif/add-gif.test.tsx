import { render, screen } from "@testing-library/react"
import { AddGif } from "./add-gif"
import userEvent from "@testing-library/user-event"


describe('Add Gif Component', () => { 

    it('should handle successful gif added and clear input', async() => { 
        const url = 'http://www.mygif.com'
        const user = userEvent.setup()
        render(<AddGif/>)

        const input = screen.getByPlaceholderText(/gift url/i)
        await user.type(input, url)
        expect(input).toHaveValue(url)

        const addBtn = screen.getByText('Agregar')
        await user.click(addBtn)

        expect(input).toHaveValue('')
     })

    it('should handle failed gif added', async () => { 
        const url = 'ht://www.mygif.com'
        const user = userEvent.setup()
        render(<AddGif/>)

        const input = screen.getByPlaceholderText(/gift url/i)
        await user.type(input, url)
        expect(input).toHaveValue(url)

        const addBtn = screen.getByText('Agregar')
        await user.click(addBtn)

        const errorMsg =  screen.getByText(/por favor ingrese/i)

        expect(input).toHaveValue(url)
        expect(errorMsg).toBeInTheDocument()
     })

 })