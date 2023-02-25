import { BoxItemFooter, FooterC, TextItemFooter } from "./styled";
import power from "../../assets/img/power.svg"
import kid from "../../assets/img/kid.svg"
import user from "../../assets/img/user.svg"
import vibrate from "../../assets/img/vibrate.svg"
import gameController from "../../assets/img/game-controller.svg"
const Footer = () => {
    return (
     <FooterC>
      <BoxItemFooter>
         <div>
            <img src={power}/>
          </div> 
        <TextItemFooter>
          Jogue tambem offline
          </TextItemFooter>
      </BoxItemFooter>
      <BoxItemFooter>
         <div>
            <img src={user}/>
          </div> 
        <TextItemFooter>67 Jogadores</TextItemFooter>
      </BoxItemFooter>
      <BoxItemFooter>
         <div>
            <img src={gameController}/>
          </div> 
        <TextItemFooter>Compativel com uso remoto</TextItemFooter>
      </BoxItemFooter>
      <BoxItemFooter>
         <div>
            <img src={vibrate}/>
          </div> 
        <TextItemFooter>Vibração no Controle</TextItemFooter>
      </BoxItemFooter>
      <BoxItemFooter>
      <div>
            <img src={kid}/>
          </div> 
        <TextItemFooter>Permitido para menores</TextItemFooter>
      </BoxItemFooter>
     </FooterC>
    )
}

export default Footer;