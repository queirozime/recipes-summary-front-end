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
        shoplistId: string;
        recipes: any;
        favorite?:boolean;
    }
    const [load,setLoad] = useState(false);
    const [selectedListsIds, setSelectedListsIds] = useState<string[]>([]);
    const favorite =  async (id:string) => {
        return api.patch(`/shoplists/favorite/${id}`, {
            headers: {
                Authorization: `${await token()}`,
            }
        })
    }
    const desfavorite =  async (id:string) => {
        return api.patch(`/shoplists/disfavor/${id}`, {
            headers: {
                Authorization: `${await token()}`,
            }
        })
    }

    const checkList = async (list: List) => {
        if(selectedListsIds.includes(list.shoplistId)) {
            setSelectedListsIds(selectedListsIds.filter((item) => item !== list.shoplistId));
            await desfavorite(list.shoplistId)
        } else {
            setSelectedListsIds([...selectedListsIds, list.shoplistId]);
            await favorite(list.shoplistId)
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

    useEffect(()=>{
        for (let list of lists) {
            if(list.favorite) {
                let aux = selectedListsIds;
                aux.push(list.shoplistId)
                setSelectedListsIds(aux);
            }
        }
    },[data])
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