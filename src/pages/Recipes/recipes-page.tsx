import { useNavigate, useSearchParams } from "react-router-dom";

import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
import CardReceipe from "../../components/cardReceita/card-recipes";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import ModalRecipe from "../../components/modalReceitas/modal-receitas";
import { Container, Header, PageTitle, Body } from "./recipes-page-styles";
import { useQuery } from "react-query";
import api from "../../http-client";
import { Recipe } from "../../types";
import { useMemo, useState } from "react";

// const data = [
//   {
//     id: "500",
//     title: "Omelete de Frango",
//     portion: "1",
//     ingredients: [
//       {
//         name: "ovo",
//         qtd: "2",
//         unit: "unidade",
//       },
//       {
//         name: "frango desfiado",
//         qtd: "1",
//         unit: "grama",
//       },
//       {
//         name: "manteiga",
//         qtd: "50",
//         unit: "grama",
//       },
//       {
//         name: "orégano",
//         qtd: "1",
//         unit: "colher de sopa",
//       },
//     ],
//     instructions: [
//       "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
//       "Adicione à mistura o frango desfiado e o orégano.",
//       "Esquente a manteiga na frigideira.",
//       "Despeje na frigideira os ovos misturados com frango e orégano.",
//       "Mexa constantemente para evitar que o omelete grude na panela.",
//       "Após ficar consistente, tire do fogo.",
//     ],
//   },
//   {
//     id: "501",
//     title: "Omelete de Frango",
//     portion: "1",
//     ingredients: [
//       {
//         name: "ovo",
//         qtd: "2",
//         unit: "unidade",
//       },
//       {
//         name: "frango desfiado",
//         qtd: "1",
//         unit: "grama",
//       },
//       {
//         name: "manteiga",
//         qtd: "50",
//         unit: "grama",
//       },
//       {
//         name: "orégano",
//         qtd: "1",
//         unit: "colher de sopa",
//       },
//     ],
//     instructions: [
//       "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
//       "Adicione à mistura o frango desfiado e o orégano.",
//       "Esquente a manteiga na frigideira.",
//       "Despeje na frigideira os ovos misturados com frango e orégano.",
//       "Mexa constantemente para evitar que o omelete grude na panela.",
//       "Após ficar consistente, tire do fogo.",
//     ],
//   },
// ];

const RecipesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>([]);

  const { data } = useQuery('RECIPES', async () => {
    return api.get(`/recipes/all`)
    },
    {
        onError: (error) => alert(error),
    }
  );
  const recipes = useMemo(
    () => data?.data,
    [data]
  );

  const handleClose = () => {
    navigation("/");
  };
  const handleShow = (id: string) => {
    setSearchParams({ id });
  };
  const handleCheckChange = (id: string) => {
    if (selectedRecipeIds.includes(id)) {
      setSelectedRecipeIds(selectedRecipeIds.filter((recipeId) => recipeId !== id));
    } else {
      setSelectedRecipeIds([...selectedRecipeIds, id]);
    }
  };

  return (
    <NavWrapper>
      <VerticalNavbar />
      <Container>
        <ModalRecipe 
          handleClose={handleClose} 
          handleAddRecipe={handleCheckChange}
        />
        <Header>
          <PageTitle>Receitas</PageTitle>
          <Button 
            onClick={() => console.log('openModal')}
            disabled={selectedRecipeIds.length === 0}
          >
            Criar Lista
          </Button>
        </Header>
        <Body>
          {recipes?.map((recipe: Recipe) => {
            return (
              <>
                <CardReceipe
                  name={recipe.title}
                  img={"https://assets.unileversolutions.com/recipes-v2/232988.jpg"}
                  portions={recipe.basePortion}
                  id={recipe.id}
                  handleShow={handleShow}
                  handleClose={handleClose}
                  checked={selectedRecipeIds.includes(recipe.id)}
                  onCheckChange={handleCheckChange}
                />
              </>
            );
          })}
        </Body>
      </Container>
    </NavWrapper>
  );
};

export default RecipesPage;
