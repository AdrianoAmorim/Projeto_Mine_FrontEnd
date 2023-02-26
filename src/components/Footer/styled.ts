import styled from "styled-components";

export const FooterC = styled.footer`
    margin-top: 110px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media(max-width:845px){
        flex-direction: column;
        margin-top: 0;
    }
`;

export const BoxItemFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease-in;
    transform: scale(1);
    & div{
        width: 100%;
        text-align: center;
        & img{
            max-width: 60px;
            filter: drop-shadow(1px 1px 2px #000);
        }
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
    @media(max-width:845px){
        margin-top: 40px;
        }

`;

export const TextItemFooter = styled.span`
    font-size:.9rem;
    color: #fff;
    font-family: "Kufam Medium";
    text-shadow: 1px 1px 2px #000;

`;