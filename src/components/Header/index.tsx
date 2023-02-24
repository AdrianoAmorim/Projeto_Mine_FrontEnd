import Logo from "../Logo";
import Navbar from "./NavBar";
import {Header} from "./styled"

const HeaderComponent = ()=>{
    return(
        <Header>
            <Logo/>
            <Navbar/>
        </Header>
    )
}

export default HeaderComponent;