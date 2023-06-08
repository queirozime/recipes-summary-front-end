import React, { useState } from "react";
import {
  TextTitle,
  CardContainer,
  ImageBackground,
  Footer,
  Title,
  FavIcon,
  DescIcon,
  Description,
  TextDescription,
  ContainerDescription,
  Card,
} from "./card-styles";
import { Icon } from "@material-ui/core";
import { StarBorder, Star, Restaurant } from "@material-ui/icons";
import { getAuth } from "firebase/auth";
import api from "../../../http-client";

interface CardProps {
  name: string;
  img: string;
  portions: number;
  id: string;
  handleShow: (id: string) => void;
  handleClose: () => void;
  favorite:boolean;
}



const CardRecipe: React.FC<CardProps> = ({
  name,
  img,
  portions,
  id,
  handleShow,
  handleClose,
  favorite,
}) => {
  const [isFav, setIsFav] = useState(favorite);

  const { currentUser } = getAuth();
  const favoriteRecipe = async () => {
      console.log(await currentUser?.getIdToken())
      await api.post(`/recipes/favorite/${IDBIndex}`,{}, {
        headers: {
          'Authorization': await currentUser?.getIdToken()
        }
      })
  }

  const disfavorRecipe = async () => {
    await api.delete(`/recipes/disfavor/${id}`, {
      headers: {
        'Authorization': await currentUser?.getIdToken()
      }
    })
  }
  return (
    <CardContainer>
      <ImageBackground url={img}>
        <FavIcon
          onClick={(e) => {
            if(isFav){
              disfavorRecipe()
            }
            else{
              favoriteRecipe()
            }
            setIsFav(!isFav);
                        
            e.stopPropagation();
          }}
        >
          {isFav ? (
            <Icon component={Star} style={{ color: "#ECDD58", fontSize: 15 }} />
          ) : (
            <Icon
              component={StarBorder}
              style={{ color: "black", fontSize: 15 }}
            />
          )}
        </FavIcon>
      </ImageBackground>
      <Footer
        onClick={() => {
          handleShow(id);
        }}
      >
        <ContainerDescription>
          <Title>
            <TextTitle>{name}</TextTitle>
          </Title>
          <Description>
            <DescIcon>
              <Icon component={Restaurant} style={{ fontSize: 10 }} />
            </DescIcon>
            {Number(portions) > 1 ? (
              <TextDescription>
                {"   " + portions + "  porções"}
              </TextDescription>
            ) : (
              <TextDescription>
                {"    " + portions + "  porção"}
              </TextDescription>
            )}
          </Description>
        </ContainerDescription>
      </Footer>
    </CardContainer>
  );
};

export default CardRecipe;
