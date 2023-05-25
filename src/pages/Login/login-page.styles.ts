import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  font-family: 'Poppins';
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 0 2.5rem;
    height: 100%;
    justify-content: center;
`;

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 60%;
    padding: 0 2.5rem;
    background-color: #FCF5DD;
    height: 100%;
    justify-content: center;
`;

export const PageDescription = styled.div`
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    position: absolute;
    top: 45%;
`;

export const FormikField = styled(Field)`
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    padding: 5px;
`;