import { useNavigate, useSearchParams } from "react-router-dom";

import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
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
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { List, Recipe } from "../../types";
import { AxiosError } from "axios";
import { Header } from "./user-page.styles";
import {auth, logout} from "../../firebase";



const UserPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  const[load,setLoad] = useState(false);

  const token =  async () =>{
    return auth.currentUser?.getIdToken();
  } 
  
  useEffect(()=>{
    const checkUser = () => {
      if (auth.currentUser) {
        setLoad(true)
      } else {
        setTimeout(checkUser, 500); // Tentar novamente após 500ms
      }
    };
    checkUser();

  },[auth.currentUser])
  
  const { data: user } = useQuery(
    "USER",
    async () => {
      return api.get(`/users`, {
        headers: {
          Authorization: `${await token()}`,
        },
      });
    },
    {
      onError: (error) => alert(error),
      enabled:load,
    }
  );
  const { data: favoriteRecipes } = useQuery(
    "RecipeFav",
    async () => {
      return api.get(`/recipes/favorite/all`, {
        headers: {
          Authorization: `${await token()}`,
        },
      });
    },
    {
      onError: (error) => alert(error),
      enabled:load,
    }
  );
  // puxar as favoritas do usuário
  const { data: lists } = useQuery(
    "LISTS",
    async () => {
      return api.get(`/shoplists`, {
        headers: {
          Authorization: `${await token()}`,
        },
      });
    },
    {
      onError: (error: AxiosError) => {
        if(error.response?.status !== 404) 
          alert(error)
      },
      enabled:load,
      
    }
  );

  const list = () => {
    return lists?.data.map((list: List) => 
    list.favorite?
    <ListCard checked={false} list={list} hasCheck={false} />:
    null);
  };
  
  const recipes = () => {
    const handleClose = () => {
      navigation("/");
    };
    const handleShow = (id: string) => {
      navigation("/");
      setSearchParams({ id });
    };

    return favoriteRecipes?.data.map((recipe: Recipe) => {
      return (
        <CardRecipe
          name={recipe.title}
          img={recipe.imageUrl}
          portions={Number(recipe.portion)}
          id={recipe.id}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      );
    });
  };

  const handleLogout = () => {
    logout();
    localStorage.setItem('user', "");
    navigation("/");
  };

  return (
    <NavWrapper>
      <VerticalNavbar />
      <Container>
        <Header>
          <PageTitle>{user?.data.name}</PageTitle>
          <PageSubTitle>{user?.data.email}</PageSubTitle>
          <Button 
            onClick={handleLogout}
          >
            Sair
          </Button>
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
