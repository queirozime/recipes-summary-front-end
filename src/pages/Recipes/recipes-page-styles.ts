import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 6.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const PageTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color:black;
`;

export const PageSubTitle = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #9d9fbc;
`;
