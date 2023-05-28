import styled, { css } from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 90%;
  border-radius: 1%;
  border-radius: 0 0 5% 5%;
`;

export const Card = styled.div`
  width:100%
  height:100%
`;

interface ImageBackgroundProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  url?: string;
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background: url(${(props) => props.url}), #a5a5a5;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  min-height: 5em;
  border-radius: 5% 5% 0 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TextTitle = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
`;

export const FavIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
`;

export const ContainerDescription = styled.div``;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DescIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.1%;
`;

export const TextDescription = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-size: 12px;

  color: #7e8392;
`;
