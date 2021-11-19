import { FC } from 'react';

import { connect } from 'react-redux';
import { IRecipe } from 'store/cookbookRecipes/interfaces';
import { RootState } from 'store/reducers';
import { RecipeCard } from 'layout/cookbook/RecipeCard';

import recipeListStyles from './recipeList.module.css';
import { NO_RECIPES_FOUND_TEXT } from './constants';
import { getRecipes } from 'store/cookbookRecipes/selectors';

type RecipeListProps = {
  recipes?: IRecipe[];
};

const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
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

export default connect(mapStateToProps, null)(RecipeList);
