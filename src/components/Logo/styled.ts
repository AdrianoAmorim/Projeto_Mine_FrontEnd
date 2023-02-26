import styled from "styled-components";

export const BoxLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    margin-bottom: 48px;
    @media (max-width:560px) {
        margin-bottom: 0;
    }   
`;
export const Text =styled.h2`
    font-size: 1.8rem;
    color: var(--text-color);
    font-family: "Inter Medium";
    margin-left: 8px;
`;