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
        shoplistId: string;
        recipes: any;
    }
    const [selectedListsIds, setSelectedListsIds] = useState<string[]>([]);
    const checkList = (list: List) => {
        if(selectedListsIds.includes(list.shoplistId)) {
            setSelectedListsIds(selectedListsIds.filter((item) => item !== list.shoplistId));
        } else {
            setSelectedListsIds([...selectedListsIds, list.shoplistId]);
        }
    }
    const { currentUser } = getAuth();

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
                    {lists.map((list: { shoplistId: string; }) => (
                        <ListCard 
                            checked={selectedListsIds.includes(list.shoplistId)} 
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