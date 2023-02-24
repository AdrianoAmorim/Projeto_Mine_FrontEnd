import styled from "styled-components";


export const BoxFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    background-color: var( --bg-cardLogin);
    padding: 25px;
     border-radius: 20px;
     margin-top: 50px;
`;

export const BoxInpLogin = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;

`;

export const InpLogin = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    background-color: var(--cinza-dark);
    color:  var(--text-input);
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 28px;
    outline: none;
    padding-inline-start: 10px;
    font-family:"Inter Medium";
    border-radius: 8px;
`;
export const LblInpLogin = styled.label`
    color: var(--text-color);
    font-family: "Kufam Medium";
    font-size: 1rem;

`;