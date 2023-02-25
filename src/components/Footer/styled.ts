import styled from "styled-components";

export const FooterC = styled.footer`
margin-top: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const BoxItemFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & div{
        width: 100%;
        text-align: center;
        & img{
            max-width: 60px;
        }
    }


`;

export const TextItemFooter = styled.span`
    font-size:.9rem;
    color: #fff;
    font-family: "Kufam Medium";

`;