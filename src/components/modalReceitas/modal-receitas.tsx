import React, { useEffect, useState } from "react";
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
import { Settings, Group, AccessTime } from "@material-ui/icons";

interface ModalProps {
  handleClose: () => void;
}

interface Ingredientes {
  name: string;
  qtd: string;
  unit: string;
}

const dataFake = {
  id: "500",
  title: "Omelete de Frango",
  url: "https://assets.unileversolutions.com/recipes-v2/232988.jpg",
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
  ],
};

const ModalRecipe: React.FC<ModalProps> = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(dataFake);
  const [searchParams, setSearchParams] = useSearchParams();
  const [ingredientes, setIngredientes] = useState([""]);
  const getData = (id: string | null) => {
    if (id) {
      setData(dataFake2);
    }
  };
  const getIngredientes = (ingredientes: Ingredientes[]) => {
    let aux = [];
    for (let ingrediente of ingredientes) {
      let stringAux =
        ingrediente.qtd + " " + ingrediente.unit + " de " + ingrediente.name;
      aux.push(stringAux);
    }
    return aux;
  };
  useEffect(() => {
    if (searchParams.has("id")) {
      setIsOpen(true);
      getData(searchParams.get("id"));
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);
  useEffect(() => {
    setIngredientes(getIngredientes(data.ingredients));
  }, [data]);

  return isOpen ? (
    <>
      <Background onClick={handleClose} />
      <Modal>
        <Header>
          <Image src={data.url} />
          <HeaderText>
            <HeaderTitle>{data.title}</HeaderTitle>
            <HeaderColumns>
              {/* <HeaderColumn>
                <Icon component={AccessTime} style={{ fontSize: 25 }} />
                <Text>20 min</Text>
              </HeaderColumn> */}
              <HeaderColumn>
                <Icon component={Group} style={{ fontSize: 25 }} />
                <Text>{data.portion} Porções</Text>
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
            {data.instructions.map((instruction) => {
              return <li>{instruction}</li>;
            })}
          </Preparo>
          <Ingredientes>
            <Title>Ingredientes</Title>
            {ingredientes.map((ingrediente) => {
              return <li>{ingrediente}</li>;
            })}
          </Ingredientes>
        </ContainerInfo>
        <Button onClick={handleClose}>Adicionar</Button>
      </Modal>
    </>
  ) : null;
};

export default ModalRecipe;
