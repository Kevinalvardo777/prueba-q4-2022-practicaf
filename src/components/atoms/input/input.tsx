
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
        <div className="input-wrapper">
            <input 
                className={`input-wrapper__field ${errorMessage ? "input-wrapper__field--error":""}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {errorMessage && <span className="input-wrapper__message-error">{errorMessage}</span>}
        </div>
    )
}