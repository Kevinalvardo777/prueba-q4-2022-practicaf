import { useState } from "react"

export const useAddGif = ()=>{

    const [inputValue, setInputValue] = useState('')        
    const [errorMessage, setErrorMessage] = useState('')    
    const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    const handleSubmit = ()=>{
        if(!urlRegex.test(inputValue)) return setErrorMessage('Por favor ingrese una url válida')
        
        setInputValue('')
    }

    const onChange = (value:string)=>{
        setInputValue(value)
    }

    return {onChange, handleSubmit, inputValue, errorMessage}

}