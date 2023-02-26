import { Li, Nav, Ul } from "./styled";

type NavBarProps ={
    show: string;
    setShow:(i:string)=>void
}
const Navbar = ({show,setShow}:NavBarProps) => {
    
    window.addEventListener("resize",()=>{
        if(window.innerWidth > 560){
           setShow("");
        }
    })

    return (
       <Nav>
        <Ul className={show + " animationMenuMob"}>
            <Li><a href="">ENTRAR</a></Li>
            <Li><a href="">FORUM</a></Li>
            <Li><a href="">SOBRE</a></Li>
            <Li><a href="">MOJANG</a></Li>
            <Li><a href="">PERGUNTAS</a></Li>
        </Ul>
       </Nav>
    )
}

export default Navbar;