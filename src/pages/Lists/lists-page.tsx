import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ListCard from "../../components/ListCard/list-card-component";
import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Body, Container, Header, PageTitle } from "../Recipes/recipes-page-styles";
import api from "../../http-client";
import { getAuth } from "firebase/auth";
import { auth } from "../../firebase";

const ListsPage = () => {
    interface List {
        name: string;
        id: string;
        recipes: any;
    }
    const [load,setLoad] = useState(false);
    const [selectedListsIds, setSelectedListsIds] = useState<string[]>([]);
    const checkList = (list: List) => {
        if(selectedListsIds.includes(list.id)) {
            setSelectedListsIds(selectedListsIds.filter((item) => item !== list.id));
        } else {
            setSelectedListsIds([...selectedListsIds, list.id]);
        }
    }

    const token =  async () =>{
        return auth.currentUser?.getIdToken();
      } 
      
      useEffect(()=>{
        const checkUser = () => {
          if (auth.currentUser) {
            setLoad(true)
          } else {
            setTimeout(checkUser, 500); // Tentar novamente após 500ms
          }
        };
        checkUser();
    
      },[auth.currentUser])
    

    const { data } = useQuery('LISTS', async () => {
        return api.get(`/shoplists`, {
            headers: {
                Authorization: `${await token()}`,
            }
        })
        },
        {
            onError: (error) => alert(error),
            enabled: load,
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