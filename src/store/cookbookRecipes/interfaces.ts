import { IProduct } from 'store/cookbookProducts/interfaces';

export interface IRecipeIngridient {
  product: IProduct;
  amount: number;
}

export interface IRecipe {
  id: number;
  name?: string;
  ingridients: IRecipeIngridient[];
}

export type IRecipeData = IRecipe[];
