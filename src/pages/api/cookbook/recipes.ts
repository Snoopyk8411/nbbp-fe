import { NextApiRequest, NextApiResponse } from 'next';
import { IRecipeData } from 'store/contributors/Ilia_Kotov/cookbookRecipes/interfaces';

import RECIPES from 'store/cookbook-recipes-data-mock.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<IRecipeData>): void {
  res.status(200).json(RECIPES);
}
