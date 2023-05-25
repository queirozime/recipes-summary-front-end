import React from "react";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { IconedPage } from "../../assets/icons";
import { Button } from "../../components/Navbar/nav-styles";
import { Container, FormContainer, LoginPageContainer, Page, PageDescription, FormikField } from "./login-page.styles";
import { Lock, Mail } from "@material-ui/icons";
import { logInWithEmailAndPassword } from "../../firebase";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
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

  return (
    <Container>
      <LoginPageContainer>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log('sent')}>
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
              </FormContainer>
              <Button type="submit" onClick={() => logInWithEmailAndPassword(values.email, values.password, navigate)}>Login</Button>
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
