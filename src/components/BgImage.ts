import styled from "styled-components";
import bgImage from "../assets/img/wallpaper.png"

export const BgImage = styled.div`
    background-image: url(${bgImage}) ;
    background-position: center;
    background-size: cover;
    width: 100vw;
    display: flex;
    justify-content: center;
    box-shadow: inset 50px 180px 160px 5px #000;
`