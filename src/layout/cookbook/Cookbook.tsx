import { RecipeCreate } from './RecipeCreate';
import { RecipeList } from './RecipeList';

import styles from './index.module.css';

export const Cookbook = () => (
  <div className={styles.wrapper}>
    <h1>COOKBOOK</h1>
    <RecipeCreate />
    <br />
    <h2>Your recipes</h2>
    <RecipeList />
  </div>
);
