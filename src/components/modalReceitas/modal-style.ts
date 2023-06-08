import styled, { css } from "styled-components";

export const Background = styled.button`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 100;
  width: 61%;
  overflow-y: auto;
  background-color: #fff;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #f2f2f2;
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;
`;

export const HeaderColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 2%;
`;
export const HeaderColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: center;
  margin-top: 5%;
  gap: 0.5rem;
`;
export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2%;
`;

export const Text = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #000000;
`;

export const HeaderTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;

  color: #000000;
`;

export const Image = styled.img`
  max-width: 70%;
  width: auto;
  height: auto;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height:10%;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  
`;
export const Ingredientes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  list-style-type: disc;
`;

export const Preparo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  max-width: 70%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  list-style-type: decimal;
`;

export const Title = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  color: #000000;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ee504f;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  margin: 1.5rem 0;
  font-family: "Poppins";
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
