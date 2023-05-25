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
    password: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo orbigatório"),
    email: Yup.string()
      .email("Email inválido")
      .required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório")
  });
  const navigate = useNavigate();

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
                  <FormikField type="password" name="password" placeholder="Senha" />
                </div>

              </FormContainer>

              <Button type="submit" onClick={() => registerWithEmailAndPassword(values.name, values.email, values.password,navigate)}>Register</Button>
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
