import { ChangeEvent, FC, useState } from 'react';
import { IRecipe, IRecipeIngredient } from 'store/cookbookRecipes/interfaces';
import { RecipeCard } from '../RecipeCard';
import { CLEAR, CREATE_RECIPE, NAME_FIELD_PLACEHOLDER } from './constants';

const INITIAL_NAME = '';

type RecipeCreateProps = {
  ingredients: IRecipeIngredient[];
  onClear: () => void;
  onCreate: (recipe: IRecipe) => void;
};

export const RecipeCreate: FC<RecipeCreateProps> = ({ ingredients, onClear, onCreate }) => {
  const [name, setName] = useState(INITIAL_NAME);

  const isReady = (): Boolean => !!(ingredients.length && name);

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value = INITIAL_NAME } = {} } = e || {};
    setName(value);
  };

  const createRecipeHandler = (): void => {
    onCreate({ name: name, ingredients: ingredients });
    onClear();
    setName(INITIAL_NAME);
  };
  return (
    <>
      <input placeholder={NAME_FIELD_PLACEHOLDER} value={name} onChange={changeNameHandler} />
      <RecipeCard recipe={{ ingredients }} />
      <button onClick={onClear} disabled={!ingredients.length}>
        {CLEAR}
      </button>
      <button disabled={!isReady()} onClick={createRecipeHandler}>
        {CREATE_RECIPE}
      </button>
    </>
  );
};
