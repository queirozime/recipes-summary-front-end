import styled, { css } from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  margin-bottom: 1%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  min-width: 266px;
  min-height: 80px;
  width: 80%;
  height: 80%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

interface ImageBackgroundProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  url?: string;
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  overflow-y: auto;
  background: url(${(props) => props.url}), #a5a5a5;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border-radius: 4% 4% 0 0;
  min-width: 200px;
  min-height: 103px;
`;

export const AddButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 23px;
  background: white;
  margin-top: 10px;
  margin-right: 15px;
  box-shadow: 0px 7px 15px rgba(254, 114, 76, 0.4);
  border-radius: 21px;
  background-color: ${(props) => (props.$isSelected ? "#FE724C" : "white")};
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5% 3% 3.6%;

  width: 90%;
  height: 10%;

  background: #fcf5dd;

  border-radius: 0 0 16px 16px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
`;

export const TextTitle = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  flex-grow: 0;
`;

export const FavIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-width: 0px;
  padding: 0px;
  margin-left: 0.01%;
`;

export const ContainerDescription = styled.div`
  font-family: "Poppins";
  font-size: 20px;
  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DescIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.5%;
`;

export const TextDescription = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-size: 12px;
  color: #7e8392;
`;
