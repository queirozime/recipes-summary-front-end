import { useNavigate, useSearchParams } from "react-router-dom";

import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import {
  Container,
  Header,
  PageTitle,
  Body,
  PageSubTitle,
} from "../Recipes/recipes-page-styles";

import ListCard from "../../components/ListCard/list-card-component";
import CardRecipe from "./component/card-carousel";

import Carousel from "./component/carousel";
import api from "../../http-client";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { getAuth } from "firebase/auth";

const lists = [
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
  {
    title: "Lista 1",
    id: 1,
    recipes: [
      {
        id: 1,
        title: "recipe1",
        description: "recipe1",
        portions: 1,
        ingredients: [
          {
            id: 1,
            title: "ingredient1",
            quantity: 1,
            unity: "kg",
          },
        ],
      },
    ],
    lastAlterationDate:{
      _seconds: 1620000000
    }
  },
];

const data = [
  {
    id: "500",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
  {
    id: "501",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
  {
    id: "502",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
  {
    id: "503",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
];

const UserPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = getAuth();
  const navigation = useNavigate();

  const list = () => {
    return lists.map((list) => <ListCard checked={false} list={list} hasCheck={false} />);
  };
      // Código para gerar o token usando Firebase
  

  const token = useMemo(() => {
    return auth.currentUser?.getIdToken();
  }, [auth]);


  // Use o token para fazer a consulta quando ele estiver disponível
  const { data: user } = useQuery(
    "USER",
    async () => {
      return api.get(`/users`, {
        headers: {
          Authorization: `${await token}`,
        },
      });
    },
    {
      onError: (error) => alert(error),
    }
  );

  console.log(user?.data);
  
  const recipes = () => {
    const handleClose = () => {
      navigation("/");
    };
    const handleShow = (id: string) => {
      navigation("/");
      setSearchParams({ id });
    };

    return data.map((receipe) => {
      return (
        <CardRecipe
          name={receipe.title}
          img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
          portions={receipe.portion}
          id={receipe.id}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      );
    });
  };

  return (
    <NavWrapper>
      <VerticalNavbar />
      <Container>
        <Header>
          <PageTitle>{user?.data.name}</PageTitle>
          <PageSubTitle>{user?.data.email}</PageSubTitle>
        </Header>
        <Body>
          <Carousel title={"Listas Favoritas"} handleSlides={list} />
          <Carousel title={"Receitas Favoritas"} handleSlides={recipes} />
        </Body>
      </Container>
    </NavWrapper>
  );
};

export default UserPage;
