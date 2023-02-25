import { BgImage } from "../../components/BgImage";
import { ContainerLimiter } from "../../components/ContainerLimiter";
import HeaderComponent from "../../components/Header";
import { BoxFormLogin, BoxInpLogin, CheckBoxLS, InpLogin, LblInpLogin,LinkEsqueceuSenha } from "./styled";
import ImgLogo from "../../assets/img/logo.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";


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

            <LblInpLogin size=".9rem" family="Inter Regular">
              <CheckBoxLS type="checkbox"/>
              Lembrar Senha
            </LblInpLogin>
          </BoxInpLogin>
          <Button>Entrar na Conta</Button>
          <LinkEsqueceuSenha>Esqueceu a Senha?</LinkEsqueceuSenha>

        </BoxFormLogin>
        <Footer/>
      </ContainerLimiter>

    </BgImage>

  )
}

export default Login;