import { useState } from "react";
import Logo from "../Logo";
import Navbar from "./NavBar";
import { BtnMobile, Header } from "./styled"

const HeaderComponent = () => {
    const [showMenu,setShowMenu] = useState("");

    const openMenu = ()=>{
        if (showMenu === "show") {
            setShowMenu("");
          } else {
            setShowMenu("show");
          }
    }


    return (
        <Header>
            <Logo />
            <Navbar show={showMenu} setShow={setShowMenu}/>
            <div id="boxBtnMobile" onClick={openMenu}>
                <BtnMobile />
                <BtnMobile />
                <BtnMobile />
            </div>
        </Header>
    )
}

export default HeaderComponent;