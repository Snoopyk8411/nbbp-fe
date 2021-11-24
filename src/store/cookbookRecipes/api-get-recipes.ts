import axios from 'axios';
import { COOKBOOK_API } from 'src/constants';
import { IRecipeData } from './interfaces';

export const apiGetRecipes = (): Promise<IRecipeData> =>
  axios
    .get<IRecipeData>(COOKBOOK_API.recipes)
    .then(res => res.data)
    .catch(error => error);
