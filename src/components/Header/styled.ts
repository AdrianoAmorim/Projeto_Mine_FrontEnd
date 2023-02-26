import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    @media (max-width:560px) {
        flex-direction: row;
        padding: 0 15px;
    }
`;
export const BtnMobile = styled.div`
    width: 1.8rem;
    border: 1px solid #FFF;
    margin-top: 4px;
    display: none;

    @media (max-width:560px){
        display: block;
    }
`;