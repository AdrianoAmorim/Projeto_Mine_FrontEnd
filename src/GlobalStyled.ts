import { createGlobalStyle } from "styled-components";
import InterMedium from "./assets/font/Inter-medium.ttf"
import InterRegular from "./assets/font/Inter-Regular.ttf"
import KufamMedium from "./assets/font/Kufam-medium.ttf"

export const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: "Inter Medium";
        src: url(${InterMedium});
    }
    @font-face {
        font-family: "Inter Regular";
        src: url(${InterRegular});
    }
    @font-face {
        font-family: "Kufam Medium";
        src: url(${KufamMedium});
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        overflow-x: hidden;
    }
    :root{
        --bg-button: #33E29A;
        --bg-cardLogin: #414141BB;
        --text-input: #BAACAC;
        --bg-actionBtn:#BAACAC;
        --cinza-dark:#262626;
        --text-color: #fff;
    }
`