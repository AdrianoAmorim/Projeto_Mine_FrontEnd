import { Btn } from "./styled";
import {ReactNode} from 'react'

type BtnProps ={
    children: ReactNode
}


const Button = ({children}:BtnProps) => {
    return (
      <Btn>{children}</Btn>
    )
}

export default Button;