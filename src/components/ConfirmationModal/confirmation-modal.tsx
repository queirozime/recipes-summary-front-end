import React, { useMemo } from "react"
import { Background } from "../modalReceitas/modal-style"
import { Recipe } from "../../types"
import { ButtonRow, Input, InputWrapper, Modal, ModalContent, RecipeWrapper, RecipesList } from "./confirmation-modal.styles"
import { Button } from "../Navbar/nav-styles"
import api from "../../http-client"
import { getAuth } from "firebase/auth"
import { useMutation } from "react-query"

interface ConfirmationModalProps {
    isOpen: boolean
    onOpenChange: (v: boolean) => void
    data: Recipe[]
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onOpenChange, data }) => {
    const auth = getAuth();
    const [listName, setListName] = React.useState<string>('')
    
    const token = useMemo(() => {
        return auth.currentUser?.getIdToken();
      }, [auth]);

    const createList = async () => {
        return api.post('/shoplists/create', {
            title: listName,
            favorite: false,
            recipes: data,
            token: await token,
        })
    }

    const { mutateAsync, isLoading } = useMutation(createList, 
        {
            onError: (error) => alert(error),
        }
    )

    const handleCreateList = async () => {
        await mutateAsync();
        onOpenChange(!isOpen);
    }
    if(isOpen) {
        //inserir o nome da lista de compra
        return (
            <>
                <Background onClick={() => onOpenChange(!isOpen)} />
                <Modal>
                    <ModalContent>
                        <div>
                            <div>Deseja criar uma lista de compras com as seguintes receitas? </div>
                            <RecipesList>
                                {data.map((recipe: Recipe) => (
                                    <RecipeWrapper>
                                        <li>{recipe.title}</li>
                                    </RecipeWrapper>
                                ))}
                            </RecipesList>

                            <InputWrapper>
                                <div>Insira o nome da lista de compras:</div>
                                <Input
                                    type="text"
                                    value={listName}
                                    onChange={(e) => setListName(e.target.value)}
                                />
                            </InputWrapper>
                        </div>
                        <ButtonRow>
                            <Button onClick={() => {
                                onOpenChange(!isOpen)
                            }}>
                                Cancelar
                            </Button>
                            <Button onClick={() => {
                                handleCreateList();
                            }}
                            disabled={listName === '' || isLoading}
                            style={{ backgroundColor: listName === '' ? '#ccc' : '#50C878' }}
                            >
                                Criar Lista
                            </Button>
                        </ButtonRow>
                    </ModalContent> 
                </Modal>    
            </>
        )
    }
    return <></>
}

export default ConfirmationModal