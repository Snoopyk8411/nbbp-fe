import { FC } from 'react';

import { IRecipe } from 'store/cookbookRecipes/interfaces';

type RecipeCardProps = {
  recipe: IRecipe;
};

export const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => (
  <div>
    <h3>{recipe.name}</h3>
    {recipe.ingredients.length
      ? recipe.ingredients.map((recipe, idx) => <div key={idx}>{`${recipe.product.name} - ${recipe.amount}`}</div>)
      : 'no ingredients'}
  </div>
);
