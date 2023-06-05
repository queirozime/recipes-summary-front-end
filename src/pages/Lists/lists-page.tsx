import { useState } from "react";
import { useQuery } from "react-query";
import ListCard from "../../components/ListCard/list-card-component";
import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Body, Container, Header, PageTitle } from "../Recipes/recipes-page-styles";
import api from "../../http-client";
import { getAuth } from "firebase/auth";

const ListsPage = () => {
    interface List {
        name: string;
        id: string;
        recipes: any;
    }
    const [selectedListsIds, setSelectedListsIds] = useState<string[]>([]);
    const checkList = (list: List) => {
        if(selectedListsIds.includes(list.id)) {
            setSelectedListsIds(selectedListsIds.filter((item) => item !== list.id));
        } else {
            setSelectedListsIds([...selectedListsIds, list.id]);
        }
    }
    const { currentUser } = getAuth();
    // const lists = [
    //     {
    //         name: 'Lista 1',
    //         id: '1',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Lista 1',
    //         id: '2',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Lista 1',
    //         id: '3',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Lista 1',
    //         id: '4',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Lista 1',
    //         id: '5',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Lista 1',
    //         id: '6',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Lista 1',
    //         id: '7',
    //         recipes: [
    //             {
    //                 id: 1,
    //                 name: 'recipe1',
    //                 description: 'recipe1',
    //                 portions: 1,
    //                 ingredients: [
    //                     {
    //                         id: 1,
    //                         name: 'ingredient1',
    //                         quantity: 1,
    //                         unity: 'kg'
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    // ]

    const { data } = useQuery('LISTS', async () => {
        return api.get(`/shoplists`, {
            headers: {
                Authorization: await currentUser?.getIdToken()
            }
        })
        },
        {
            onError: (error) => alert(error),
        }
    );
    const lists = data?.data || [];

    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>Listas</PageTitle>
                </Header>
                <Body style={{ gap: '5rem' }}>
                    {lists.map((list: { id: string; }) => (
                        <ListCard 
                            checked={selectedListsIds.includes(list.id)} 
                            list={list} 
                            onChangeCheck={checkList}
                        />
                    ))}
                </Body>
            </Container>
        </NavWrapper>
    );
}

export default ListsPage;