import React, { useState } from "react";
import {
  TextTitle,
  CardContainer,
  ImageBackground,
  Footer,
  AddButton,
  Title,
  FavIcon,
  DescIcon,
  Description,
  TextDescription,
  ContainerDescription,
  Card,
} from "./card-styles";
import { Icon } from "@material-ui/core";
import { Check, StarBorder, Star, Restaurant } from "@material-ui/icons";
import api from "../../http-client";
import { getAuth } from "firebase/auth";

interface CardProps {
  name: string;
  img: string;
  portions: number;
  id: string;
  handleShow: (id: string) => void;
  handleClose: () => void;
  checked: boolean;
  onCheckChange: (id: string) => void;
}

const CardRecipe: React.FC<CardProps> = ({
  name,
  img,
  portions,
  id,
  handleShow,
  handleClose,
  checked,
  onCheckChange,
}) => {
  const [isFav, setIsFav] = useState(false);
  const frase = name;
  const limiteCaracteres = 24;
  const nameLimitado =
    frase.length > limiteCaracteres
      ? frase.slice(0, limiteCaracteres) + "..."
      : frase

  const { currentUser } = getAuth();
  const favoriteRecipe = async () => {
      await api.post(`/recipes/favorite/${id}`, {
        headers: {
          Authorization: await currentUser?.getIdToken()
        }
      })
  }

  const desfavoriteRecipe = async () => {
    await api.delete(`/recipes/disfavor/${id}`, {
      headers: {
        Authorization: await currentUser?.getIdToken()
      }
    })
  }

  return (
    <CardContainer>
      <Card>
        <ImageBackground url={img} onClick={() => handleShow(id)}>
          <AddButton
            $isSelected={checked}
            onClick={(e) => {
              onCheckChange(id);
              e.stopPropagation();
            }}
          >
            <Icon component={Check} style={{ color: "white", fontSize: 15 }} />
          </AddButton>
        </ImageBackground>
        <Footer
          onClick={() => {
            handleShow(id);
          }}
        >
          <ContainerDescription>
            <Title>
              <TextTitle>{nameLimitado}</TextTitle>
              <FavIcon
                onClick={(e) => {
                  handleClose();
                  if(isFav){
                    desfavoriteRecipe()
                  }
                  else{
                    favoriteRecipe()
                  }
                  setIsFav(!isFav);
                  
                  e.stopPropagation();
                }}
              >
                {isFav ? (
                  <Icon
                    component={Star}
                    style={{ color: "#ECDD58", fontSize: 15 }}
                  />
                ) : (
                  <Icon
                    component={StarBorder}
                    style={{ color: "black", fontSize: 15 }}
                  />
                )}
              </FavIcon>
            </Title>
            <Description>
              <DescIcon>
                <Icon component={Restaurant} style={{ fontSize: 10 }} />
              </DescIcon>
              {Number(portions) > 1 ? (
                <TextDescription>{portions + "  porções"}</TextDescription>
              ) : (
                <TextDescription>{portions + "  porção"}</TextDescription>
              )}
            </Description>
          </ContainerDescription>
        </Footer>
      </Card>
    </CardContainer>
  );
};

export default CardRecipe;
