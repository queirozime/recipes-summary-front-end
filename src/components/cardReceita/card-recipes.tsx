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
}

const CardReceipe: React.FC<CardProps> = ({ name, img, portions }) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <CardContainer>
      <Card>
        <ImageBackground url={img}>
          <AddButton>
            <Icon component={Check} style={{ color: "white", fontSize: 15 }} />
          </AddButton>
        </ImageBackground>
        <Footer>
          <ContainerDescription>
            <Title>
              <TextTitle>{name}</TextTitle>
              <FavIcon
                onClick={() => {
                  setIsFav(!isFav);
                }}
              >
                {isFav ? (
                  <Icon
                    component={Star}
                    style={{ color: "red", fontSize: 15 }}
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
              <TextDescription>{portions + "  porções"}</TextDescription>
            </Description>
          </ContainerDescription>
        </Footer>
      </Card>
    </CardContainer>
  );
};

export default CardReceipe;
