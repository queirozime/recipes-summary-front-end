import { NavWrapper } from "../components/Navbar/nav-styles";
import VerticalNavbar from "../components/Navbar/vertical-navbar-component";
import CardReceipe from "../components/cardReceita/card-recipes";
import { Container, Header, Body } from "./Recipes/recipes-page-styles";

const RecipesPage = () => {
  return (
    <NavWrapper>
      <VerticalNavbar />
      <Container>
        <Header>
          <h1>Receitas</h1>
          <button>Adicionar</button>
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
};

export default RecipesPage;
