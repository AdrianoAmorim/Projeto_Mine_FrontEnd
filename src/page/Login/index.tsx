import { BgImage } from "../../components/BgImage";
import { ContainerLimiter } from "../../components/ContainerLimiter";
import HeaderComponent from "../../components/Header";


const Login = () => {
  return (
    <BgImage>
      <ContainerLimiter>
       <HeaderComponent/>
      </ContainerLimiter>

    </BgImage>

  )
}

export default Login;