export interface Ingredient {
    unit: string;
    qty: number;
    name: string;
}
export interface Recipe {
    id: string;
    ingredients: Ingredient[];
    title: string;
    portion: number;
    basePortion: number;
    imageUrl: string;
    instructions: string[];
    preparationTime: number;
    favorite: boolean;
}
export interface FavoriteRecipe {
    id: string;
    recipeId:string;
    ingredients: Ingredient[];
    title: string;
    portion: number;
    basePortion: number;
    imageUrl: string;
    instructions: string[];
    preparationTime: number;
    favorite: boolean;
}
export interface List {
    title: string;
    id: string;
    recipes: Recipe[];
    ingredients: Ingredient[];
    favorite?:boolean;
}

