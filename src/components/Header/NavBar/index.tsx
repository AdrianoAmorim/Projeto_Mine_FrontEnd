import { Li, Nav, Ul } from "./styled";

const Navbar = () => {
    return (
       <Nav>
        <Ul>
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