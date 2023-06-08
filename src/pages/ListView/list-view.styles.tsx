import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`;

export const Body = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5rem;
`;

export const RecipeItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: 60%;
    margin-right: 1rem;
`;

export const Recipe = styled.div`
    align-items: center;
    background-color: #F6F6F6;
    width: 100%;
    padding: 0.5rem;
    font-size: 20px;
    font-weight: bold;
`;

export const Button = styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1;
    border: none;
    cursor: pointer;
    background-color: #F66D6D;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        filter: brightness(0.8);
    }
`;

export const PortionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

export const PortionValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1;
    border-right: 1px solid #F6F6F6;
    border-left: 1px solid #F6F6F6;
    font-size: 20px;
    font-weight: bold; 
`;

export const PortionsItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    align-content: center;
    width: 40%;
    height: 100%;
`;

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 0.5rem;
    width: fit-content;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
  }

  th:not(:last-child),
  td:not(:last-child) {
    padding-right: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
`;