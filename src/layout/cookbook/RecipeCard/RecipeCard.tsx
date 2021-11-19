import { FC } from 'react';

import { IRecipe } from 'store/cookbookRecipes/interfaces';
import { NO_INGREDIENTS } from './constants';

import recipeCardStyles from './recipeCard.module.css';

type RecipeCardProps = {
  recipe: IRecipe;
};

export const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const { name, ingredients } = recipe;
  return (
    <div className={recipeCardStyles.recipe}>
      <h3>{name}</h3>
      {ingredients.length
        ? ingredients.map(({ product, amount }, index) => <div key={index}>{`${product.name} - ${amount}`}</div>)
        : NO_INGREDIENTS}
    </div>
  );
};
