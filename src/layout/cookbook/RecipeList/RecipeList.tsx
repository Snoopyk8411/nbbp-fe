import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IRecipe } from 'store/cookbookRecipes/interfaces';
import { RootState } from 'store/reducers';
import { selectIsLoading, selectRecipes } from 'store/cookbookRecipes/selectors';
import { recipesAction } from 'store/cookbookRecipes/actions';
import { RecipeCard } from 'layout/cookbook/RecipeCard';

import { LOAD_ERROR_TEXT, NO_RECIPES_FOUND_TEXT } from './constants';
import recipeListStyles from './recipeList.module.css';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { selectError } from 'store/cookbookProducts/selectors';

type RecipeListProps = {
  recipes?: IRecipe[];
  error?: Error;
  isLoading?: Boolean;
  onLoad?: () => void;
};

const RecipeList: FC<RecipeListProps> = ({ recipes, error, isLoading, onLoad }) => {
  useEffect(() => {
    onLoad?.();
  }, []);
  const hasRecipes = recipes && recipes.length !== 0;
  return (
    <div className={recipeListStyles.wrapper}>
      {!!error && <ErrorMessage message={`${LOAD_ERROR_TEXT}: ${error.message}`} />}
      {isLoading && <Loader />}
      {hasRecipes && !isLoading ? (
        recipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />)
      ) : (
        <span>{NO_RECIPES_FOUND_TEXT}</span>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState): Partial<RecipeListProps> => ({
  recipes: selectRecipes(state),
  error: selectError(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<RecipeListProps> => ({
  onLoad: (): void => {
    dispatch(recipesAction.loadRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
