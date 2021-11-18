import { RecipeWizard } from './RecipeWizard';
import { RecipeList } from './RecipeList';

import cn from 'classnames';

import { COOKBOOK_TITLE, RECIPES_TITLE } from './constants';

import cookbookStyles from './cookbook.module.css';
import theme from './cookbook-theme.module.css';
import { FC } from 'react';

export const Cookbook: FC = () => (
  <div className={cn(theme['cookbook-theme'], cookbookStyles.wrapper)}>
    <h1>{COOKBOOK_TITLE}</h1>
    <RecipeWizard />
    <br />
    <h2>{RECIPES_TITLE}</h2>
    <RecipeList />
  </div>
);
