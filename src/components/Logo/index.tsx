import { BoxLogo,Text } from "./styled"
import ImgLogo from "../../assets/img/logo.svg"
const Logo = () => {
    return (
        <BoxLogo>
            <img src={ImgLogo}/>
           <Text> MINE</Text>
        </BoxLogo>

    )
}

export default Logo;