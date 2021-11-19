import { FC, useEffect } from 'react';

import { connect } from 'react-redux';
import { IRecipe } from 'store/cookbookRecipes/interfaces';
import { RootState } from 'store/reducers';
import { RecipeCard } from 'layout/cookbook/RecipeCard';

import recipeListStyles from './recipeList.module.css';
import { NO_RECIPES_FOUND_TEXT } from './constants';
import { getRecipes } from 'store/cookbookRecipes/selectors';
import { recipesAction } from 'store/cookbookRecipes/actions';
import { Dispatch } from '@reduxjs/toolkit';

type RecipeListProps = {
  recipes?: IRecipe[];
  onLoad: () => void;
};

const RecipeList: FC<RecipeListProps> = ({ recipes, onLoad }) => {
  console.log(recipesAction);
  useEffect(() => {
    onLoad();
  }, []);
  const hasRecipes = recipes && recipes.length !== 0;
  return (
    <div className={recipeListStyles.wrapper}>
      {hasRecipes ? (
        recipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />)
      ) : (
        <span>{NO_RECIPES_FOUND_TEXT}</span>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ recipes: getRecipes(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoad: () => dispatch(recipesAction.loadRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
