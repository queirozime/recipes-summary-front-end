import React, { useEffect, useMemo, useState } from "react";
import {
  Header,
  Image,
  ContainerInfo,
  HeaderTitle,
  HeaderColumn,
  Ingredientes,
  Preparo,
  Modal,
  Button,
  Background,
  HeaderColumns,
  HeaderText,
  Text,
  Title,
} from "./modal-style";
import { useSearchParams } from "react-router-dom";
import { Icon } from "@material-ui/core";
import { useQuery } from "react-query";
import { Settings, Group } from "@material-ui/icons";
import { Ingredient, Recipe } from "../../types";
import api from "../../http-client";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface ModalProps {
  handleClose: () => void;
  handleAddRecipe: (id: string) => void;
}

const dataFake = {
  id: "500",
  title: "Omelete de Frango",
  url: "https://assets.unileversolutions.com/recipes-v2/232988.jpg",
  portion: "1",
  ingredients: [
    {
      name: "ovo",
      qty: 2,
      unit: "unidade",
    },
    {
      name: "frango desfiado",
      qty: 1,
      unit: "grama",
    },
    {
      name: "manteiga",
      qty: 50,
      unit: "grama",
    },
    {
      name: "orégano",
      qty: 1,
      unit: "colher de sopa",
    },
  ],
  instructions: [
    "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
    "Adicione à mistura o frango desfiado e o orégano.",
  ],
};

const dataFake2 = {
  id: "500",
  url: "https://assets.unileversolutions.com/recipes-v2/232988.jpg",
  title: "Omelete de Arroz",
  portion: "1",
  ingredients: [
    {
      name: "ovo",
      qty: 2,
      unit: "unidade",
    },
    {
      name: "frango desfiado",
      qty: 1,
      unit: "grama",
    },
    {
      name: "manteiga",
      qty: 50,
      unit: "grama",
    },
    {
      name: "orégano",
      qty: 1,
      unit: "colher de sopa",
    },
  ],
  instructions: [
    "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
    "Adicione à mistura o frango desfiado e o orégano.",
  ],
};

const ModalRecipe: React.FC<ModalProps> = ({ handleClose, handleAddRecipe }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = useMemo(() => searchParams.has("id"), [searchParams]);
  const [imageUrl,setImageUrl] = useState('');

  const { data } = useQuery('RECIPE', async () => {
    return api.get(`/recipes/${searchParams.get("id")}`)
    },
    {
        onError: (error) => alert(error),
        enabled: isOpen,
    }
  );
  const storage = getStorage();
  const recipe: Recipe = useMemo(() => data?.data, [data]);
  
  useEffect(()=>{
    const loadImage = async () =>{
      if (recipe) {
        const filePath = recipe.imageUrl;
        if (filePath) {
          const starsRef = ref(storage, filePath);
  
          try {
            const url = await getDownloadURL(starsRef);
            setImageUrl(url);
          } catch (error) {
            console.error("Erro ao obter a URL pública:", error);
          }
        }
      }
    }
    loadImage();

  },[recipe])
  
  const getIngredientText = (ingredient: Ingredient) => {
    if (ingredient.qty !== null)
      return `${ingredient.qty} ${ingredient.unit} de ${ingredient.name}`;
    return `${ingredient.name} ${ingredient.unit}`;
  };

  return isOpen ? (
    <>
      <Background onClick={()=>{; setImageUrl('');handleClose()}} />
      <Modal>
        <Header>
          <Image src={imageUrl} />
          <HeaderText>
            <HeaderTitle>{recipe?.title}</HeaderTitle>
            <HeaderColumns>
              {/* <HeaderColumn>
                <Icon component={AccessTime} style={{ fontSize: 25 }} />
                <Text>20 min</Text>
              </HeaderColumn> */}
              <HeaderColumn>
                <Icon component={Group} style={{ fontSize: 25 }} />
                <Text>{recipe?.portion} Porções</Text>
              </HeaderColumn>
              <HeaderColumn>
                <Icon component={Settings} style={{ fontSize: 25 }} />
                <Text>Fácil</Text>
              </HeaderColumn>
            </HeaderColumns>
          </HeaderText>
        </Header>
        <ContainerInfo>
          <Preparo>
            <Title>Preparo</Title>
            {recipe?.instructions.map((instruction: any) => {
              return <li>{instruction}</li>;
            })}
          </Preparo>
          <Ingredientes>
            <Title>Ingredientes</Title>
            {recipe?.ingredients.map((ingredient) => {
              return <li>{getIngredientText(ingredient)}</li>;
            })}
          </Ingredientes>
        </ContainerInfo>
        <Button onClick={() => {
          handleAddRecipe(recipe.id);
          handleClose();
        }}>
          Adicionar
        </Button>
      </Modal>
    </>
  ) : null;
};

export default ModalRecipe;
