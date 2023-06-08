import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  gap: 1rem;
  height: 100%;
  font-size: 1.5rem;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 100;
  width: 61%;
  overflow-y: auto;
  background-color: #fff;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 2rem;
  min-height: 20rem;
  justify-content: space-evenly;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const RecipesList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.5rem 0;
`;

export const InputPortion = styled.input`
  width: 10%;
  height: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 1 rem 0;
  margin-left: 1rem;
`;

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
