import { useState } from "react";
import ListCard from "../../components/ListCard/list-card-component";
import { Button, NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Body, Container, Header, PageTitle } from "../Recipes/recipes-page-styles";

const ListsPage = () => {
    const [selectedLists, setSelectedLists] = useState([])
    const lists = [
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lista 1',
            id: 1,
            recipes: [
                {
                    id: 1,
                    name: 'recipe1',
                    description: 'recipe1',
                    portions: 1,
                    ingredients: [
                        {
                            id: 1,
                            name: 'ingredient1',
                            quantity: 1,
                            unity: 'kg'
                        },
                    ],
                }
            ]
        },
    ]

    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>Listas</PageTitle>
                </Header>
                <Body style={{ gap: '5rem' }}>
                    {lists.map((list) => (
                        <ListCard checked={false} list={list}/>
                    ))}
                </Body>
            </Container>
        </NavWrapper>
    );
}

export default ListsPage;