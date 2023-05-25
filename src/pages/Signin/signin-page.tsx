import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IconedPage } from "../../assets/icons";
import { Button } from "../../components/Navbar/nav-styles";
import { Container, FormContainer, SigninPageContainer, Page, PageDescription, FormikField } from "./signin-page.styles";
import { registerWithEmailAndPassword } from "../../firebase";
import { Lock, Mail } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
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
  const navigate = useNavigate();
  const handleClick = (values:typeof initialValues) =>{
      if(values.password1 === values.password2){
        registerWithEmailAndPassword(values.name, values.email, values.password1,navigate);
      }
      else{
        alert("Senhas diferentes");
      }
  };
  return (
    <Container>
      <SigninPageContainer>
        <h1>SignIn</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log('sent')}>
          {({ values }) => (
            <Form>
              <FormContainer>
                <div>
                  <FormikField type="name" name="name" placeholder="nome" />
                </div>
                <div>
                  <Mail />
                  <FormikField type="email" name="email" placeholder="E-mail" />
                </div>
                <div>
                  <Lock />
                  <FormikField type="password" name="password1" placeholder="Digite Senha" />
                </div>
                <div>
                  <Lock />
                  <FormikField type="password" name="password1" placeholder="Digite novamente" />
                </div>
                

              </FormContainer>

              <Button type="submit" onClick={()=>handleClick(values)}>Register</Button>
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
