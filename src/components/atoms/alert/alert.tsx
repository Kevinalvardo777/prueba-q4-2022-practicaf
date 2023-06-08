import { FC, PropsWithChildren } from "react";
import successIcon from './../../../assets/success-icon.png'
import errorIcon from './../../../assets/error-icon.png'
import './alert.scss'

interface AlertProps extends PropsWithChildren {
    type?: "success" | "error" ;
    show?: boolean
  }

export const Alert: FC<AlertProps> = ({type ="success", show=false, children}) => {
  return (
    <div className={`alert alert__wrapper ${show && 'alert--animation ' } ${!show && 'alert--hide'} alert--${type}`}>
        <img src={type === "success" ? successIcon : errorIcon} alt={type} height={50} className="alert__img"/>
        {children}
    </div>
  )
}
