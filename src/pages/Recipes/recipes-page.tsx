import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
import CardReceipe from "../../components/cardReceita/card-recipes";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Container, Header, PageTitle, Body } from "./recipes-page-styles";

const RecipesPage = () => {
    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>Receitas</PageTitle>
                    <Button>Adicionar</Button>
                </Header>
                <Body>
                    <CardReceipe
                        name="Taco Mexicano"
                        img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
                        portions={1}
                    />
                    <CardReceipe
                        name="Taco Mexicano"
                        img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
                        portions={1}
                    />
                    <CardReceipe
                        name="Taco Mexicano"
                        img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
                        portions={1}
                    />
                    <CardReceipe
                        name="Taco Mexicano"
                        img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
                        portions={1}
                    />
                    <CardReceipe
                        name="Taco Mexicano"
                        img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
                        portions={1}
                    />
                </Body>
            </Container>
        </NavWrapper>
    );
}

export default RecipesPage;