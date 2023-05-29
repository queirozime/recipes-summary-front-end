import React from "react";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { IconedPage } from "../../assets/icons";
import { Button } from "../../components/Navbar/nav-styles";
import { Container, FormContainer, LoginPageContainer, Page, PageDescription, FormikField } from "./login-page.styles";
import { Lock, Mail } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import AuthService from "../../components/AuthService";
import {useState} from 'react';


type loginProps = {
    authService: AuthService
}

const LoginPage = (props:loginProps) => {
  const auth = getAuth();
  const [error,setError] = useState(null as any);

  interface FormValues {
    email: string;
    password: string;
  }
  const initialValues = {
    email: "",
    password: ""
  };
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email inválido")
      .required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório")
  });

  const handleSubmit = async (values: FormValues) => {
    try{
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/");
    }catch(e) {
      alert("Erro ao fazer login");
    }
  } 

  const login = (values: FormValues) => {
    props.authService.login(values.email,values.password)
    .then(() => {
      window.location.reload();
      //navigate('/');
    })
    .catch(error =>{
      setError(error);
      console.log(error);
    });
  }

  return (
    <Container>
      <LoginPageContainer>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={login}>
          {({ values }) =>
            <Form>
              <FormContainer>
                <div>
                  <Mail />
                  <FormikField type="email" name="email" placeholder="E-mail" />
                </div>

                <div>
                  <Lock />
                  <FormikField type="password" name="password" placeholder="Senha" />
                </div>
                <Button type="submit">Login</Button>
                <p style={{ fontSize: '1rem'}}> 
                  Não tem conta?
                  <a href="/signin">
                    Cadastre-se
                  </a> 
                </p>
              </FormContainer>
            </Form>
          }
        </Formik>
      </LoginPageContainer>
      <Page>
        <IconedPage />
        <PageDescription>CozinhEx</PageDescription>
      </Page>
    </Container>
  );
};

export default LoginPage;
