import { useNavigate, useSearchParams } from "react-router-dom";

import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import {
  Container,
  PageTitle,
  Body,
  PageSubTitle,
} from "../Recipes/recipes-page-styles";

import ListCard from "../../components/ListCard/list-card-component";
import CardRecipe from "./component/card-carousel";

import Carousel from "./component/carousel";
import api from "../../http-client";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getAuth } from "firebase/auth";
import { List, Recipe } from "../../types";
import { AxiosError } from "axios";
import { Header } from "./user-page.styles";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Index } from "firebase/firestore";

const UserPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipeUrls, setRecipeUrls] = useState<string[]>([]);
  

  const auth = getAuth();
  const navigation = useNavigate();
  const storage = getStorage();

  
  const token = useMemo(() => {
    return auth.currentUser?.getIdToken();
  }, [auth]);

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
  const { data: favoriteRecipes } = useQuery(
    "RecipeFav",
    async () => {
      return api.get(`/recipes/favorite/all`, {
        headers: {
          Authorization: `${await token}`,
        },
      });
    },
    {
      onError: (error) => alert(error),
    }
  );
  // puxar as favoritas do usuário
  const { data: lists } = useQuery(
    "LISTS",
    async () => {
      return api.get(`/shoplists`, {
        headers: {
          Authorization: `${await token}`,
        },
      });
    },
    {
      onError: (error: AxiosError) => {
        if(error.response?.status !== 404) 
          alert(error)
      },
    }
  );
  const favRecipes = useMemo(
    () => favoriteRecipes?.data,
    [favoriteRecipes]
  );

  useEffect(() => {
    const fetchRecipeUrls = async () => {
      const urls: string[] = [];
  
      if (favRecipes) {
        for (const recipe of favRecipes) {
          const filePath = recipe.imageUrl;
          const starsRef = ref(storage, filePath);

          try {
            const url = await getDownloadURL(starsRef);
            urls.push(url);
          } catch (error) {
            console.error("Erro ao obter a URL pública:", error);
          }
        }
      }
  
      setRecipeUrls(urls);
    };
  
    fetchRecipeUrls();
  }, [favRecipes]);

  const list = () => {
    return lists?.data.map((list: List) => <ListCard checked={false} list={list} hasCheck={false} />);
  };
  
  const recipes = () => {
    const handleClose = () => {
      navigation("/");
    };
    const handleShow = (id: string) => {
      navigation("/");
      setSearchParams({ id });
    };

    return favoriteRecipes?.data.map((receipe: Recipe,index:number) => {
      return (
        <CardRecipe
          name={receipe.title}
          img={recipeUrls[index]}
          portions={Number(receipe.portion)}
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
          {lists?.data && <Carousel title={"Listas Favoritas"} handleSlides={list} />}
          <Carousel title={"Receitas Favoritas"} handleSlides={recipes} />
        </Body>
      </Container>
    </NavWrapper>
  );
};

export default UserPage;
