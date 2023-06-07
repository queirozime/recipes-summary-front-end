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
  ImageWrapper,
} from "./modal-style";
import { useSearchParams } from "react-router-dom";
import { Icon } from "@material-ui/core";
import { useQuery } from "react-query";
import { Group, Watch } from "@material-ui/icons";
import { Ingredient, Recipe } from "../../types";
import api from "../../http-client";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface ModalProps {
  handleClose: () => void;
  handleAddRecipe: (id: string) => void;
}

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
          <ImageWrapper>
            <Image src={imageUrl} />
          </ImageWrapper>
          <HeaderText>
            <HeaderTitle>{recipe?.title}</HeaderTitle>
            <HeaderColumns>
              {/* <HeaderColumn>
                <Icon component={AccessTime} style={{ fontSize: 25 }} />
                <Text>20 min</Text>
              </HeaderColumn> */}
              <HeaderColumn>
                <Icon component={Group} style={{ fontSize: 25 }} />
                <Text>{recipe?.basePortion} Porções</Text>
              </HeaderColumn>
              <HeaderColumn>
                <Icon component={Watch} style={{ fontSize: 25 }} />
                <Text>{recipe?.preparationTime} minutos</Text>
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
