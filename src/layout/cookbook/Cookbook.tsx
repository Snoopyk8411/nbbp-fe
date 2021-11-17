import { RecipeCreate } from './RecipeCreate';
import { RecipeList } from './RecipeList';

import { COOKBOOK_TITLE, RECIPES_TITLE } from './constants';

import cookbookStyles from './index.module.css';
import { FC } from 'react';

export const Cookbook: FC = () => (
  <div className={cookbookStyles.wrapper}>
    <h1>{COOKBOOK_TITLE}</h1>
    <RecipeCreate />
    <br />
    <h2>{RECIPES_TITLE}</h2>
    <RecipeList />
  </div>
);
