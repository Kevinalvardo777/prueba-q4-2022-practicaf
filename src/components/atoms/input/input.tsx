
import { FC } from "react";
import './input.scss'

export interface InputProps {
    errorMessage?: string, 
    placeholder?: string,
    value?: string,
    onChange: ( value: string) => void
}
export const Input:FC<InputProps>=({ value="", errorMessage, onChange, placeholder="" }) => {
    return (
        <div className="input input__wrapper">
            <input 
                className={`input input__wrapper__field ${errorMessage ? "input__wrapper__field--error":""}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {errorMessage && <span className="input__wrapper__message-error">{errorMessage}</span>}
        </div>
    )
}