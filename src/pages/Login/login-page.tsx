import { IconedPage } from "../../assets/icons";
import { Formik, Form } from 'formik';
import { Button } from "../../components/Navbar/nav-styles";
import { Container, FormContainer, FormikField, LoginPageContainer, Page, PageDescription } from "./login-page.styles";
import { Lock, Mail } from "@material-ui/icons";

const LoginPage = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    return (
        <Container>
            <LoginPageContainer>
                <h1>Login</h1>
                <Formik initialValues={initialValues} onSubmit={() => console.log('sent')}>
                    {({values, submitForm}) => (
                        <Form>
                            <FormContainer>
                                <div>
                                    <Mail />
                                    <FormikField type="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <Lock />
                                    <FormikField type="password" name="password" placeholder="Senha" />
                                </div>
                                <Button onClick={() => submitForm()}>
                                    Login
                                </Button>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </LoginPageContainer>
            <Page>
                <IconedPage />
                <PageDescription>CozinhEx</PageDescription>
            </Page>
        </Container>
    );
}

export default LoginPage;