import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
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
`;