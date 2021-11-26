import { FC, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IProduct } from 'store/contributors/Ilia_Kotov/cookbookProducts/interfaces';
import { recipesAction } from 'store/contributors/Ilia_Kotov/cookbookRecipes/actions';
import { IRecipe, IRecipeIngredient } from 'store/contributors/Ilia_Kotov/cookbookRecipes/interfaces';
import { ProductsSelect } from 'layout/contributors/Ilia_Kotov/cookbook/ProductsSelect';
import { Card } from 'layout/contributors/Ilia_Kotov/cookbook/components/Card';
import { IngredientCreate } from 'layout/contributors/Ilia_Kotov/cookbook/IngredientCreate';
import { RecipeCreate } from 'layout/contributors/Ilia_Kotov/cookbook/RecipeCreate';

import { AMOUNT_TITLE, RECIPE_TITLE, SELECT_INGREDIENT_TITLE } from './constant';
import recipeWizardStyles from './recipeWizard.module.css';

type RecipeWizardProps = {
  addRecipe?: (recipe: IRecipe) => void;
};

const RecipeWizard: FC<RecipeWizardProps> = ({ addRecipe }) => {
  const [ingredients, setIngredients] = useState<IRecipeIngredient[]>([]);
  const [product, setProduct] = useState<IProduct>();

  const clear = useCallback((): void => {
    setIngredients([]);
  }, []);
  const handleRecipeCreate = useCallback((recipe: IRecipe): void => {
    addRecipe?.(recipe);
    clear();
  }, []);
  const handleAddIngredient = (ingredient: IRecipeIngredient): void => {
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <div className={recipeWizardStyles.wrapper}>
      <Card title={SELECT_INGREDIENT_TITLE} className={recipeWizardStyles['wizard-item']}>
        <ProductsSelect onChange={setProduct} />
      </Card>
      <Card title={AMOUNT_TITLE} className={recipeWizardStyles['wizard-item']}>
        <IngredientCreate product={product} onCreate={handleAddIngredient} />
      </Card>
      <Card title={RECIPE_TITLE} className={recipeWizardStyles['wizard-item']}>
        <RecipeCreate ingredients={ingredients} onClear={clear} onCreate={handleRecipeCreate} />
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): Partial<RecipeWizardProps> => ({
  addRecipe: (recipe: IRecipe): void => {
    dispatch(recipesAction.addRecipe(recipe));
  },
});

export default connect(null, mapDispatchToProps)(RecipeWizard);
