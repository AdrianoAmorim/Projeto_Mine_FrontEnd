import { BgImage } from "../../components/BgImage";
import { ContainerLimiter } from "../../components/ContainerLimiter";
import HeaderComponent from "../../components/Header";
import { BoxFormLogin, BoxInpLogin, InpLogin, LblInpLogin } from "./styled";
import ImgLogo from "../../assets/img/logo.svg";


const Login = () => {
  return (
    <BgImage>
      <ContainerLimiter>
        <HeaderComponent />
        <BoxFormLogin>
          <div>
            <img src={ImgLogo} />
          </div>
          <BoxInpLogin>
            <LblInpLogin>
              E-mail
              <InpLogin />
            </LblInpLogin>

            <LblInpLogin>
              Senha
              <InpLogin />
            </LblInpLogin>
          </BoxInpLogin>

        </BoxFormLogin>
      </ContainerLimiter>

    </BgImage>

  )
}

export default Login;