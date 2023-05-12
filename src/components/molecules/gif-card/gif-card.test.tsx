import { render, screen } from "@testing-library/react"
import { GifCard } from "./gif-card"
import userEvent from "@testing-library/user-event"

describe('Gif Card Test', () =>{
    
    const url = 'http://myimage.jpg'
    
    it('should display gif image', () => { 
        render(<GifCard id={1} url={url}/>)

        const gif = screen.getByRole("img",{name:'gif #1'})
        expect(gif).toHaveAttribute('src',url)

     })
    
    it('should display delete and cancel btns on click delete icon', async()=>{
        const user = userEvent.setup()
        render(<GifCard id={1} url={url}/>)

        const deleteWarningMsgHide = screen.queryByRole('heading',{name: /deseas eliminar/i})
        expect(deleteWarningMsgHide).not.toBeInTheDocument();
        
        const deleteIconBtn = screen.getByRole('button')
        await user.click(deleteIconBtn)
        
        const deleteWarningMsg = screen.getByRole('heading',{name: /deseas eliminar/i})
        const cancelBtn = screen.getByText(/cancelar/i)
        const deleteBtn = screen.getByText("Eliminar")

        expect(deleteWarningMsg).toBeInTheDocument();
        expect(cancelBtn).toBeInTheDocument();
        expect(deleteBtn).toBeInTheDocument();
    })

    it('should call delete gif petition on click delete btn', async ()=>{

        const user = userEvent.setup()
        render(<GifCard id={1} url={url}/>)
        
        const deleteIconBtn = screen.getByRole('button')
        await user.click(deleteIconBtn)
        
        const deleteBtn = screen.getByText("Eliminar")
        expect(deleteBtn).toBeInTheDocument()
        user.click(deleteBtn)

        // TODO: Assertion check if petition is called

    })
    it('should hide button cover when click on cancel', async ()=>{
        const user = userEvent.setup()
        render(<GifCard id={1} url={url}/>)
        
        const deleteIconBtn = screen.getByRole('button')
        await user.click(deleteIconBtn)
        
        let deleteWarningMsg = screen.queryByRole('heading',{name: /deseas eliminar/i})
        expect(deleteWarningMsg).toBeInTheDocument();
        
        const cancelBtn = screen.getByText(/cancelar/i)
        expect(cancelBtn).toBeInTheDocument();
        await user.click(cancelBtn)

        deleteWarningMsg = screen.queryByRole('heading',{name: /deseas eliminar/i})
        expect(deleteWarningMsg).not.toBeInTheDocument();
    })

})