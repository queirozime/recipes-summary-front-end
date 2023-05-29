import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import {
  Container,
  Header,
  PageTitle,
  Body,
  PageSubTitle,
} from "../Recipes/recipes-page-styles";
import Carousel from "./component/carousel";

const UserPage = () => {
  return (
    <NavWrapper>
      <VerticalNavbar />
      <Container>
        <Header>
          <PageTitle>Usuário</PageTitle>
          <PageSubTitle>usuario@gmail.com</PageSubTitle>
        </Header>
        <Body>
          <Carousel />
        </Body>
      </Container>
    </NavWrapper>
  );
};

export default UserPage;
