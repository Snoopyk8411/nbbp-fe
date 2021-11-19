import { FC, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IProduct } from 'store/cookbookProducts/interfaces';
import { recipesAction } from 'store/cookbookRecipes/actions';
import { IRecipe, IRecipeIngredient } from 'store/cookbookRecipes/interfaces';
import { ProductsSelect } from 'layout/cookbook/ProductsSelect';
import { Card } from 'layout/cookbook/ui/Card';
import { IngredientCreate } from 'layout/cookbook/IngredientCreate';
import { RecipeCreate } from 'layout/cookbook/RecipeCreate';

import { AMOUNT_TITLE, RECIPE_TITLE, SELECT_INGREDIENT_TITLE } from './constant';
import recipeWizardStyles from './recipeWizard.module.css';

type RecipeWizardProps = {
  addRecipe: (recipe: IRecipe) => void;
};

const RecipeWizard: FC<RecipeWizardProps> = ({ addRecipe }) => {
  const [ingredients, setIngredients] = useState<IRecipeIngredient[]>([]);
  const [product, setProduct] = useState<IProduct>();

  const clearHandler = useCallback((): void => {
    setIngredients([]);
  }, []);
  const recipeCreateHandler = useCallback((recipe: IRecipe): void => {
    addRecipe(recipe);
    setIngredients([]);
  }, []);

  return (
    <div className={recipeWizardStyles.wrapper}>
      <Card title={SELECT_INGREDIENT_TITLE} className={recipeWizardStyles['wizard-item']}>
        <ProductsSelect onChange={setProduct} />
      </Card>
      <Card title={AMOUNT_TITLE} className={recipeWizardStyles['wizard-item']}>
        <IngredientCreate product={product} onCreate={ingredient => setIngredients([...ingredients, ingredient])} />
      </Card>
      <Card title={RECIPE_TITLE} className={recipeWizardStyles['wizard-item']}>
        <RecipeCreate ingredients={ingredients} onClear={clearHandler} onCreate={recipeCreateHandler} />
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRecipe: (recipe: IRecipe) => {
    dispatch(recipesAction.addRecipe(recipe));
  },
});

export default connect(null, mapDispatchToProps)(RecipeWizard);
