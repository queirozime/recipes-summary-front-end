import { NavWrapper } from "../components/Navbar/nav-styles";
import VerticalNavbar from "../components/Navbar/vertical-navbar-component";
import { Container, Header } from "./Recipes/recipes-page-styles";

const RecipesPage = () => {
    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <h1>Receitas</h1>
                    <button>Adicionar</button>
                </Header>
            </Container>
        </NavWrapper>
    );
}

export default RecipesPage;