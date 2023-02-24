import styled from "styled-components";
import bgImage from "../assets/img/wallpaper.png"

export const BgImage = styled.div`
    background: url(${bgImage}) no-repeat center center;
  
    background-size: cover;
    width: 100vw;
    object-fit: contain;
    display: flex;
    justify-content: center;
    box-shadow: inset 50px 180px 160px 5px #000;
`