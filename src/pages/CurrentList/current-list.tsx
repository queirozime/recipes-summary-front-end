import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Container, Header, PageTitle } from "../Recipes/recipes-page-styles";

const CurrentList = () => {
    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>Lista Atual</PageTitle>
                    <Button>Adicionar</Button>
                </Header>
            </Container>
        </NavWrapper>
    );
}

export default CurrentList;