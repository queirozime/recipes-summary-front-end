import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useSearchParams } from "react-router-dom";

interface ModalProps {
  handleClose: () => void;
}

const dataFake = {
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
  ],
};

const dataFake2 = {
  id: "500",
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
  const getData = (id: string | null) => {
    if (id) {
      setData(dataFake2);
    }
  };
  useEffect(() => {
    if (searchParams.has("id")) {
      setIsOpen(true);
      getData(searchParams.get("id"));
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);

  console.log();
  return (
    <>
      <Modal show={isOpen} onHide={handleClose} fullSize={true}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.instructions}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRecipe;
