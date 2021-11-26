import { ChangeEvent, FC, useState } from 'react';

import { IRecipe, IRecipeIngredient } from 'store/contributors/Ilia_Kotov/cookbookRecipes/interfaces';
import { RecipeCard } from 'layout/contributors/Ilia_Kotov/cookbook/RecipeCard';

import { CLEAR, CREATE_RECIPE, NAME_FIELD_PLACEHOLDER } from './constants';
import recipeCreateStyles from './recipeCreate.module.css';

const INITIAL_NAME = '';

type RecipeCreateProps = {
  ingredients: IRecipeIngredient[];
  onClear: () => void;
  onCreate: (recipe: IRecipe) => void;
};

export const RecipeCreate: FC<RecipeCreateProps> = ({ ingredients, onClear, onCreate }) => {
  const [name, setName] = useState(INITIAL_NAME);

  const isReady = !!(ingredients.length && name);

  const hasIngredients = !!ingredients.length;

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value = INITIAL_NAME } = {} } = e || {};
    setName(value);
  };

  const handleCreateRecipe = (): void => {
    onCreate({ name: name, ingredients: ingredients });
    setName(INITIAL_NAME);
  };
  return (
    <div className={recipeCreateStyles.wrapper}>
      <input placeholder={NAME_FIELD_PLACEHOLDER} value={name} onChange={handleChangeName} />
      <RecipeCard recipe={{ ingredients }} />
      <button onClick={onClear} disabled={!hasIngredients}>
        {CLEAR}
      </button>
      <button disabled={!isReady} onClick={handleCreateRecipe}>
        {CREATE_RECIPE}
      </button>
    </div>
  );
};
