import styled, { css } from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  margin-top: 10px;
  width: 266px;
  height: 202px;
`;

export const Card = styled.div`
  margin-top: 10px;
  width: 266px;
  height: 202px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

interface ImageBackgroundProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  url?: string;
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  display: flex;
  justify-content: flex-end;
  width: 290px;
  height: 133px;
  background: url(${(props) => props.url}), #a5a5a5;
  background-size: cover;
  background-position: center;

  border-radius: 16px 16px 0 0;
`;

export const AddButton = styled.button`
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

  &:active {
    background-color: #029094;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px 18px;
  gap: 10px;

  width: 266px;
  height: 40px;

  background: #fcf5dd;

  border-radius: 0 0 16px 16px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 23px;
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
  width: 18px;
  height: 17px;
  background: transparent;
  border-width: 0px;
  padding: 0px;
`;

export const ContainerDescription = styled.div`
  width: 252px;
  height: 57px;
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
  margin-right: 2px;
`;

export const TextDescription = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-size: 12px;
  color: #7e8392;
`;
