import React from "react";
import Slider from "react-slick";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Container, Title, ContainerSlide } from "./carousel-style";

import CardRecipe from "./card-carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./arrows.css";
const data = [
  {
    id: "500",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
  {
    id: "501",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
  {
    id: "502",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
  {
    id: "503",
    title: "Omelete de Frango",
    portion: "1",
    ingredients: [
      {
        name: "ovo",
        qtd: "2",
        unit: "unidade",
      },
      {
        name: "frango desfiado",
        qtd: "1",
        unit: "grama",
      },
      {
        name: "manteiga",
        qtd: "50",
        unit: "grama",
      },
      {
        name: "orégano",
        qtd: "1",
        unit: "colher de sopa",
      },
    ],
    instructions: [
      "Quebre os dois ovos em uma vasilha e bata bem até se formar uma mistura amarelada e uniforme.",
      "Adicione à mistura o frango desfiado e o orégano.",
      "Esquente a manteiga na frigideira.",
      "Despeje na frigideira os ovos misturados com frango e orégano.",
      "Mexa constantemente para evitar que o omelete grude na panela.",
      "Após ficar consistente, tire do fogo.",
    ],
  },
];

const Carousel = () => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    acessibility: true,
    arrows: true,
    infinite: false,
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigate();
  const handleClose = () => {
    navigation("/");
  };
  const handleShow = (id: string) => {
    navigation("/");
    setSearchParams({ id });
  };
  return (
    <Container>
      <Title>Receitas Favoritas</Title>
      <Slider {...settings}>
        {data.map((receipe) => {
          return (
            <CardRecipe
              name={receipe.title}
              img="https://assets.unileversolutions.com/recipes-v2/232988.jpg"
              portions={receipe.portion}
              id={receipe.id}
              handleShow={handleShow}
              handleClose={handleClose}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Carousel;
