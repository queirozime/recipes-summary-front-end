import { useState } from "react";
import { NavWrapper } from "../../components/Navbar/nav-styles";
import VerticalNavbar from "../../components/Navbar/vertical-navbar-component";
import { Button as MainButton } from "../../components/Navbar/nav-styles";
import { Container, Header, PageTitle } from "../Recipes/recipes-page-styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Body, Button, ButtonsContainer, PortionValue, PortionsItems, PortionsWrapper, Recipe, RecipeItems, StyledTable, SummaryContainer, TableContainer } from "./list-view.styles";
import ExportCSV from "../../utils/csv-util";

const ListView = () => {
    const mockList = {
        name: 'Lista 1',
        id: '1',
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
        ],
        ingredients: [
            {
                id: 1,
                name: 'ingredient1',
                quantity: 1,
                unity: 'kg'
            },
        ],
    }
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const listId = searchParams.get('listId');
    // const list = getList(listId); 
    const [currList, setList] = useState(mockList);

    const csvData = currList.ingredients.map((item) => {
        return [
            item.name,
            item.quantity,
            item.unity
        ]
    });

    const handleAddPortion = (recipeId: number) => {
        const newRecipes = currList.recipes.map((recipe) => {
            if(recipe.id === recipeId) {
                return {
                    ...recipe,
                    portions: recipe.portions + 1
                }
            }
            return recipe;
        });
        setList({
            ...currList,
            recipes: newRecipes
        });
    }

    const handleRemovePortion = (recipeId: number) => {
        const newRecipes = currList.recipes.map((recipe) => {
            if(recipe.id === recipeId && recipe.portions > 0) {
                return {
                    ...recipe,
                    portions: recipe.portions - 1
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
                    <PageTitle>{`${currList.name}`}</PageTitle>
                </Header>
                <Body>
                    <SummaryContainer>
                        <RecipeItems>
                            Receitas Selecionadas
                            {currList.recipes.map((recipe) => (
                                <Recipe>{recipe.name}</Recipe>
                            ))}
                        </RecipeItems>
                        <PortionsItems>
                            Porções
                            {currList.recipes.map((recipe) => (
                                <PortionsWrapper>
                                    <Button 
                                        style={{ 
                                                borderTopLeftRadius: '0.5rem', 
                                                borderBottomLeftRadius: '0.5rem' 
                                            }}
                                        onClick={() => handleRemovePortion(recipe.id)}
                                    >-</Button>
                                    <PortionValue>{recipe.portions}</PortionValue>
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
                                    {currList.ingredients.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unity}</td>
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
                            filename={`${currList.name}.csv`}
                        />
                        <MainButton onClick={handleSubmitList}>Salvar</MainButton>
                    </ButtonsContainer>
                </Body>
            </Container>
        </NavWrapper>
    );
}

export default ListView;