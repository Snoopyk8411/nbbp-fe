import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IProduct } from 'store/cookbookProducts/interfaces';
import { recipesAction } from 'store/cookbookRecipes/actions';
import { IRecipe, IRecipeIngridient } from 'store/cookbookRecipes/interfaces';

import { ProductsSelector } from '../ProductsSelector';

import styles from './recipeCreate.module.css';
import { RecipeCard } from '../RecipeCard';

type Props = {
  addRecipe?: (recipe: IRecipe) => void;
};

const RecipeCreate: React.FC<Props> = ({ addRecipe }) => {
  const [curIngridients, setCurIngridients] = React.useState<IRecipeIngridient[]>([]);
  const [curProduct, setCurProduct] = React.useState<IProduct>();
  const [curAmount, setCurAmount] = React.useState(0);

  const clear = React.useCallback(() => {
    setCurIngridients([]);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Select Ingridient</h2>
        <ProductsSelector onChange={setCurProduct} />
      </div>
      <div>
        <h2>Specify amount</h2>
        <div className={styles.amount}>
          <div>{curProduct?.name}</div>
          <input
            value={curAmount || ''}
            name='amount'
            placeholder='Amount'
            onChange={e => {
              setCurAmount(Number(e.target.value));
            }}
          />
          <button
            disabled={!(curProduct && curAmount)}
            onClick={() => {
              curProduct && setCurIngridients([...curIngridients, { product: curProduct, amount: curAmount }]);
            }}
          >
            Add ingridient
          </button>
        </div>
      </div>
      <div>
        <h2>Your recipe</h2>
        <RecipeCard recipe={{ id: 0, ingridients: curIngridients }} />
        <button onClick={clear} disabled={!curIngridients.length}>
          Clear
        </button>
        <button
          disabled={!curIngridients.length}
          onClick={() => {
            addRecipe?.({ id: 1, name: 'recipe', ingridients: curIngridients });
            clear();
          }}
        >
          submit recipe
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRecipe: (recipe: IRecipe) => {
    dispatch(recipesAction.addRecipe(recipe));
  },
});

export default connect(null, mapDispatchToProps)(RecipeCreate);