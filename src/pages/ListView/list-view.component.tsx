import { useEffect, useState } from "react";
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
    const [isEdit,setIsEdit] = useState(false)
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
    useEffect(()=>{
        setList(data)
    },[data])

    const getQuantity = (name: string , unit: string)=>{
        let total = 0.0
        for (let recipe of currList?.recipes){
            for(let ingredient of recipe?.ingredients){
                if(ingredient.name === name && ingredient.unit === unit){
                    let portion = recipe.portion 
                    total += ingredient.qty  * ( portion/recipe.basePortion) 
                }
            }

        }
        return total 
    }

    const updateList = async (id:string) => {
        return api.patch(`/shoplists/${id}`, {
            recipes: currList['recipes'],
        })
    }
    const csvData = currList?.ingredients?.map((item) => {
        let actualQty = getQuantity(item.name,item.unit) 
        
        return [
            item.name,
            actualQty,
            item.unit
        ]
    });
    
    const handleAddPortion = (recipeId: string) => {
        const newRecipes = currList?.recipes?.map((recipe) => {
            if(recipe.id === recipeId) {
                return {
                    ...recipe,
                    portion: recipe.portion + 1
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
                    portion: recipe.portion - 1
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
        if(isEdit){
            console.log(currList);
            updateList(currList.id)
            navigate('/lists')
        }
        setIsEdit(!isEdit)
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
                            {currList?.recipes?.map((recipe: RecipeType) => (
                                <Recipe>{recipe.title}</Recipe>
                            ))}
                        </RecipeItems>
                        <PortionsItems>
                            <div style={{ fontSize: '1.5rem' }}>
                                Porções
                            </div>
                            {currList?.recipes?.map((recipe: RecipeType) => {
                                return(
                                    isEdit?
                                        <PortionsWrapper>
                                            <Button 
                                                style={{ 
                                                        borderTopLeftRadius: '0.5rem', 
                                                        borderBottomLeftRadius: '0.5rem' 
                                                    }}
                                                onClick={() => handleRemovePortion(recipe.id)}
                                            >-</Button>
                                            <PortionValue style={{backgroundColor: isEdit ? '#F66D6D' : ""}}>{recipe.portion}</PortionValue>
                                            <Button style={{ 
                                                borderTopRightRadius: '0.5rem', 
                                                borderBottomRightRadius: '0.5rem' 
                                                }}
                                                onClick={() => handleAddPortion(recipe.id)}
                                            >+</Button>
                                        </PortionsWrapper>
                                    :<PortionValue>{recipe.portion}</PortionValue>
                            )})}
                        </PortionsItems>
                    </SummaryContainer>
                    <ButtonsContainer>
                        <ExportCSV 
                            data={csvData} 
                            headers={['Ingrediente', 'Quantidade', 'Unidade']} 
                            filename={`${data?.title}.csv`}
                        />
                        <MainButton onClick={handleSubmitList}>{isEdit?"Salvar":"Editar"}</MainButton>
                    </ButtonsContainer>
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
                                    {currList?.ingredients?.map((item: Ingredient, index: number) => {
                                    let actualQty = getQuantity(item.name,item.unit) 
                                    return (<tr key={index}>
                                        <td>{item.name}</td>
                                        {isEdit?
                                        <td>{actualQty? actualQty:"-"}</td>
                                        :<td>{item.qty}</td>
                                        }
                                        <td>{item.unit}</td>
                                    </tr>)
                                    })}
                                </tbody>
                            </StyledTable>
                        </TableContainer>
                    </div>
                    
                </Body>
            </Container>
        </NavWrapper>
    );
}

export default ListView;