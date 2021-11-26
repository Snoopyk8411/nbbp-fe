import axios from 'axios';
import { COOKBOOK_API } from 'store/contributors/Ilia_Kotov/constants';
import { IRecipeData } from './interfaces';

export const apiGetRecipes = (onError?: (error: Error) => void): Promise<IRecipeData> =>
  axios
    .get<IRecipeData>(COOKBOOK_API.recipes)
    .then(res => res.data)
    .catch(error => {
      onError?.(error);
      return [];
    });
