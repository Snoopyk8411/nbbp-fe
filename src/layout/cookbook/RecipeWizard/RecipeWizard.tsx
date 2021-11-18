import { FC, useState, useCallback } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IProduct } from 'store/cookbookProducts/interfaces';
import { recipesAction } from 'store/cookbookRecipes/actions';
import { IRecipe, IRecipeIngredient } from 'store/cookbookRecipes/interfaces';

import { ProductsSelect } from 'layout/cookbook/ProductsSelect';

import recipeWizardStyles from './recipeWizard.module.css';
import { IngredientCreate } from '../IngredientCreate';
import { RecipeCreate } from '../RecipeCreate';
import { AMOUNT_TITLE, RECIPE_TITLE, SELECT_INGREDIENT_TITLE } from './constant';

type RecipeWizardProps = {
  addRecipe: (recipe: IRecipe) => void;
};

const RecipeWizard: FC<RecipeWizardProps> = ({ addRecipe }) => {
  const [ingredients, setIngredients] = useState<IRecipeIngredient[]>([]);
  const [product, setProduct] = useState<IProduct>();

  const clearHandler = useCallback(() => {
    setIngredients([]);
  }, []);
  const recipeCreateHandler = useCallback((recipe: IRecipe) => {
    addRecipe(recipe);
    setIngredients([]);
  }, []);

  return (
    <div className={recipeWizardStyles.wrapper}>
      <div>
        <h2>{SELECT_INGREDIENT_TITLE}</h2>
        <ProductsSelect onChange={setProduct} />
      </div>
      <div>
        <h2>{AMOUNT_TITLE}</h2>
        <IngredientCreate product={product} onCreate={ingredient => setIngredients([...ingredients, ingredient])} />
      </div>
      <div>
        <h2>{RECIPE_TITLE}</h2>
        <RecipeCreate ingredients={ingredients} onClear={clearHandler} onCreate={recipeCreateHandler} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRecipe: (recipe: IRecipe) => {
    dispatch(recipesAction.addRecipe(recipe));
  },
});

export default connect(null, mapDispatchToProps)(RecipeWizard);
