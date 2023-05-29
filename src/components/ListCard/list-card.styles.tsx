import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #F6F6F6;
    border-radius: 10px;
    max-width: 200px;
    padding: 1rem;
    cursor: pointer;
    &: hover {
        filter: brightness(0.9);
    }
    aspect-ratio: 1/1;
`;

export const ListDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 3rem;
    font-size: 20px;
`;

export const ListInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;