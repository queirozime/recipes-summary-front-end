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
import ConfirmationModal from "../../components/ConfirmationModal/confirmation-modal";
import { getAuth } from "firebase/auth";


const RecipesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  const [selectedRecipeIds, setSelectedRecipeIds] = useState<string[]>([]);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);

const auth = getAuth();

const token = useMemo(() => {
  return auth.currentUser?.getIdToken();
}, [auth]);

  const { data } = useQuery('RECIPES', async () => {
    console.log(token)
    const recipes = api.get(`/recipes/all`, {
      headers: {
        Authorization: `${await token}`,
      },
    })
    console.log((await recipes).data)
    return recipes
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
        <ConfirmationModal 
          isOpen={isConfirmationOpen} 
          onOpenChange={setIsConfirmationOpen}
          data={recipes?.filter((recipe: Recipe) => selectedRecipeIds.includes(recipe.id))}
        />
        <Header>
          <PageTitle>Receitas</PageTitle>
          <Button 
            onClick={() => setIsConfirmationOpen(true)}
            disabled={selectedRecipeIds.length === 0}
          >
            Criar Lista
          </Button>
        </Header>
        <Body>
        {recipes?.map((recipe: Recipe, index: number) => (
      <CardReceipe
        key={recipe.id}
        name={recipe.title}
        img={recipe.imageUrl}
        portions={recipe.basePortion}
        id={recipe.id}
        handleShow={handleShow}
        handleClose={handleClose}
        checked={selectedRecipeIds.includes(recipe.id)}
        onCheckChange={handleCheckChange}
        favorite={recipe.favorite}
      />
    ))}
        </Body>
      </Container>
    </NavWrapper>
  );
};

export default RecipesPage;
