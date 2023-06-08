import React from "react";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { IconedPage } from "../../assets/icons";
import { Button } from "../../components/Navbar/nav-styles";
import { Container, FormContainer, LoginPageContainer, Page, PageDescription, FormikField } from "./login-page.styles";
import { Lock, Mail } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { logInWithEmailAndPassword } from "../../firebase";
import {auth} from "../../firebase";

const LoginPage = () => {

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
      await logInWithEmailAndPassword(values);
      localStorage.setItem('user', JSON.stringify(auth.currentUser));
      navigate("/user");
    }catch(e) {
      alert("Erro ao fazer login");
    }
  } 

  return (
    <Container>
      <LoginPageContainer>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
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
