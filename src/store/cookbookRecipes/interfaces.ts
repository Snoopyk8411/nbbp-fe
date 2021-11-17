import { IProduct } from 'store/cookbookProducts/interfaces';

export interface IRecipeIngredient {
  product: IProduct;
  amount: number;
}

export interface IRecipe {
  id?: number;
  name?: string;
  ingredients: IRecipeIngredient[];
}

export type IRecipeData = IRecipe[];
