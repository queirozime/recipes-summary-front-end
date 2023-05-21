import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Container, Header, PageTitle } from "../Recipes/recipes-page-styles";

const UserPage = () => {
    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>Usuários</PageTitle>
                    <Button>Adicionar</Button>
                </Header>
            </Container>
        </NavWrapper>
    );
}

export default UserPage;