import { connect } from 'react-redux';
import * as React from 'react';
import { IRecipe } from 'store/cookbookRecipes/interfaces';
import { RootState } from 'store/reducers';
import { RecipeCard } from '../RecipeCard';

import styles from './recipeList.module.css';

type Props = {
  recipes?: IRecipe[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => (
  <div className={styles.wrapper}>
    {recipes?.length ? recipes?.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />) : 'no recipes found'}
  </div>
);

const mapStateToProps = (state: RootState) => ({ recipes: state.recipes.data });

export default connect(mapStateToProps, null)(RecipeList);
