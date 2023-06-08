import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IconedPage } from "../../assets/icons";
import { Button } from "../../components/Navbar/nav-styles";
import { Container, FormContainer, SigninPageContainer, Page, PageDescription, FormikField } from "./signin-page.styles";
import { Lock, Mail, Person } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerWithEmailAndPassword } from "../../firebase";

const SigninPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  interface FormValues {
    name: string;
    email: string;
    password1: string;
    password2: string;
  }

  const initialValues = {
    name: "",
    email: "",
    password1: "",
    password2:""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo orbigatório"),
    email: Yup.string()
      .email("Email inválido")
      .required("Campo obrigatório"),
    password1: Yup.string().required("Campo obrigatório"),
    password2: Yup.string().required("Campo obrigatório")
  });

  const handleSubmit = async (values: FormValues) => {
    try{
      if(values.password1 === values.password2) {
        await registerWithEmailAndPassword(values.name, values.email, values.password1,navigate);
        localStorage.setItem('user', JSON.stringify(auth.currentUser));
        navigate("/");
      }
      else{
        alert("Senhas diferentes");
      }
    }catch(e) {
      alert("Erro ao fazer login");
    }
  } 

  return (
    <Container>
      <SigninPageContainer>
        <h1>SignIn</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <FormContainer>
                <div>
                  <Person />
                  <FormikField type="name" name="name" placeholder="Nome" />
                </div>
                <div>
                  <Mail />
                  <FormikField type="email" name="email" placeholder="E-mail" />
                </div>
                <div>
                  <Lock />
                  <FormikField type="password" name="password1" placeholder="Digite a senha" />
                </div>
                <div>
                  <Lock />
                  <FormikField type="password" name="password2" placeholder="Digite novamente" />
                </div>
                
                <Button type="submit">Cadastrar</Button>
              </FormContainer>

            </Form>
          )}
        </Formik>
      </SigninPageContainer>
      <Page>
        <IconedPage />
        <PageDescription>CozinhEx</PageDescription>
      </Page>
    </Container>
  );
};

export default SigninPage;
