import styled from "styled-components";

export const Btn = styled.button`
    width: 100%;
    height: 48px;
    color: var(--text-color);
    font-size: 1rem;
    font-family:  "Kufam Medium";
    background-color:#22AE75;
    box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.05), 0px 2px 0px #FFFFFF, inset 0px 2px 0px rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    margin-top: 22px;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        background-color:#2e8460;
    }

`;