import React from "react";
import Slider from "react-slick";

import { Container, Title } from "./carousel-style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./arrows.css";

interface CarouselProps {
  title: string;
  handleSlides: () => JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({ title, handleSlides }) => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    acessibility: true,
    arrows: true,
    infinite: false,
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Slider {...settings}>{handleSlides()}</Slider>
    </Container>
  );
};

export default Carousel;
