import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width:560px) {
        display: none;
        position: absolute;
        flex-direction: column;
        right: 10px;
        top: 75px;
        z-index: 1;
        background-color: #262626bb;
        backdrop-filter: blur(2px);
        padding: 10px;
        border-radius: 10px;
    }
`;

export const Li = styled.li`
    color: var(--text-color);
     font-family: "Kufam Medium";
    font-size: 1rem;
    list-style: none;
    margin-right: 42px;
    
    &:nth-child(5){
        margin-right: 0;
    }
    & a{
        text-decoration: none;
        color: var(--text-color);
    transition: all .2s ease-in-out;
        &:visited{
            color: var(--text-color);
        }
        &:hover{
            color:#33E29A;
        }
    }

    @media (max-width:560px) {
        margin-top: 20px;
        margin-right: 0;
    }
`;