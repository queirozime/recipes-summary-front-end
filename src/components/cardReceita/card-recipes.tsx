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
  onCheckChange
}) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <CardContainer>
      <Card>
        <ImageBackground url={img} onClick={() => handleShow(id)}>
          <AddButton 
            $isSelected={checked} 
            onClick={(e) => {
              onCheckChange(id)
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
              <TextTitle>{name}</TextTitle>
              <FavIcon
                onClick={(e) => {
                  handleClose();
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
