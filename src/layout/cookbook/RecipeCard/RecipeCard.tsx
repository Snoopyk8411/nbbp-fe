import * as React from 'react';

import { IRecipe } from 'store/cookbookRecipes/interfaces';

type Props = {
  recipe: IRecipe;
};

export const RecipeCard: React.FC<Props> = ({ recipe }) => (
  <div>
    <h3>{recipe.name}</h3>
    {recipe.ingridients.length
      ? recipe.ingridients.map((recipe, idx) => <div key={idx}>{`${recipe.product.name} - ${recipe.amount}`}</div>)
      : 'no ingridients'}
  </div>
);
