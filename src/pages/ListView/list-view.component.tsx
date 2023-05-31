import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Button as MainButton } from "../../components/Navbar/nav-styles";
import { Container, Header, PageTitle } from "../Recipes/recipes-page-styles";
import { 
    Body, 
    Button, 
    ButtonsContainer, 
    PortionValue, 
    PortionsItems, 
    PortionsWrapper, 
    Recipe, 
    RecipeItems, 
    StyledTable, 
    SummaryContainer, 
    TableContainer 
} from "./list-view.styles";
import ExportCSV from "../../utils/csv-util";
import api from "../../http-client"
import { Ingredient, List, Recipe as RecipeType } from "../../types";

const ListView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const listId = searchParams.get('listId');
    const initialData: List = {
        title: '',
        recipes: [],
        ingredients: [],
        id: '',
    }
    const fetch = async () => {
        const res = await api.get(`/shoplists/${listId}`);
        return res.data;
    }

    const { data } = useQuery(['LIST'], fetch,
        {  
            optimisticResults: false,
            keepPreviousData: false,
            initialData: initialData,
            onError: (error) => alert(error),
        }
    );
    const [currList, setList] = useState<List>(data);

    const csvData = currList?.ingredients?.map((item) => {
        return [
            item.name,
            item.qty,
            item.unit
        ]
    });

    const handleAddPortion = (recipeId: string) => {
        const newRecipes = currList?.recipes?.map((recipe) => {
            if(recipe.id === recipeId) {
                return {
                    ...recipe,
                    portions: recipe.portion + 1
                }
            }
            return recipe;
        });
        setList({
            ...currList,
            recipes: newRecipes
        });
    }

    const handleRemovePortion = (recipeId: string) => {
        const newRecipes = currList?.recipes?.map((recipe) => {
            if(recipe.id === recipeId && recipe.portion > 0) {
                return {
                    ...recipe,
                    portions: recipe.portion - 1
                }
            }
            return recipe;
        });
        setList({
            ...currList,
            recipes: newRecipes
        });
    }

    const handleSubmitList = () => {
        console.log(currList);
        navigate('/lists');
    }
    

    return (
        <NavWrapper>
            <VerticalNavbar />
            <Container>
                <Header>
                    <PageTitle>{`${data?.title}`}</PageTitle>
                </Header>
                <Body>
                    <SummaryContainer>
                        <RecipeItems>
                            <div style={{ fontSize: '1.5rem' }}>
                                Receitas Selecionadas
                            </div>
                            {data?.recipes?.map((recipe: RecipeType) => (
                                <Recipe>{recipe.title}</Recipe>
                            ))}
                        </RecipeItems>
                        <PortionsItems>
                            <div style={{ fontSize: '1.5rem' }}>
                                Porções
                            </div>
                            {data?.recipes?.map((recipe: RecipeType) => (
                                <PortionsWrapper>
                                    <Button 
                                        style={{ 
                                                borderTopLeftRadius: '0.5rem', 
                                                borderBottomLeftRadius: '0.5rem' 
                                            }}
                                        onClick={() => handleRemovePortion(recipe.id)}
                                    >-</Button>
                                    <PortionValue>{recipe.portion}</PortionValue>
                                    <Button style={{ 
                                        borderTopRightRadius: '0.5rem', 
                                        borderBottomRightRadius: '0.5rem' 
                                        }}
                                        onClick={() => handleAddPortion(recipe.id)}
                                    >+</Button>
                                </PortionsWrapper>
                            ))}
                        </PortionsItems>
                    </SummaryContainer>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TableContainer>
                            <StyledTable>
                                <thead>
                                    <tr>
                                        <th>Ingrediente</th>
                                        <th>Quantidade</th>
                                        <th>Unidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.ingredients?.map((item: Ingredient, index: number) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.unit}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </StyledTable>
                        </TableContainer>
                    </div>
                    <ButtonsContainer>
                        <ExportCSV 
                            data={csvData} 
                            headers={['Ingrediente', 'Quantidade', 'Unidade']} 
                            filename={`${data?.title}.csv`}
                        />
                        <MainButton onClick={handleSubmitList}>Salvar</MainButton>
                    </ButtonsContainer>
                </Body>
            </Container>
        </NavWrapper>
    );
}

export default ListView;