import { NextApiRequest, NextApiResponse } from 'next';
import { IRecipeData } from 'store/cookbookRecipes/interfaces';

import RECIPES from 'store/cookbook-recipes-data-mock.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<IRecipeData>) {
  res.status(200).json(RECIPES);
}
