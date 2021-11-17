import { FC } from 'react';

import { connect } from 'react-redux';
import { IRecipe } from 'store/cookbookRecipes/interfaces';
import { RootState } from 'store/reducers';
import { RecipeCard } from 'layout/cookbook/RecipeCard';

import styles from './recipeList.module.css';
import { getRecipes } from 'store/cookbookRecipes/selectors';

type RecipeListProps = {
  recipes?: IRecipe[];
};

const RecipeList: FC<RecipeListProps> = ({ recipes }) => (
  <div className={styles.wrapper}>
    {recipes?.length ? recipes?.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />) : 'no recipes found'}
  </div>
);

const mapStateToProps = (state: RootState) => ({ recipes: getRecipes(state) });

export default connect(mapStateToProps, null)(RecipeList);
