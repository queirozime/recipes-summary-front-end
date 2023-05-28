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
interface CardProps {
  name: string;
  img: string;
  portions: string;
  id: string;
  handleShow: (id: string) => void;
  handleClose: () => void;
}

const CardRecipe: React.FC<CardProps> = ({
  name,
  img,
  portions,
  id,
  handleShow,
  handleClose,
}) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <CardContainer>
      <Card>
        <ImageBackground url={img}>
          <AddButton>
            <Icon component={Check} style={{ color: "white", fontSize: 15 }} />
          </AddButton>
        </ImageBackground>
        <Footer
          onClick={(event) => {
            handleShow(id);
          }}
        >
          <ContainerDescription>
            <Title>
              <TextTitle>{name}</TextTitle>
              <FavIcon
                onClick={() => {
                  handleClose();
                  setIsFav(!isFav);
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
