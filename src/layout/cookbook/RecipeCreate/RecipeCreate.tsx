import { FC, useState, useCallback } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IProduct } from 'store/cookbookProducts/interfaces';
import { recipesAction } from 'store/cookbookRecipes/actions';
import { IRecipe, IRecipeIngredient } from 'store/cookbookRecipes/interfaces';

import { ProductsSelect } from 'layout/cookbook/ProductsSelect';

import styles from './recipeCreate.module.css';
import { RecipeCard } from 'layout/cookbook/RecipeCard';

type RecipeCreateProps = {
  addRecipe?: (recipe: IRecipe) => void;
};

const RecipeCreate: FC<RecipeCreateProps> = ({ addRecipe }) => {
  const [curingredients, setCuringredients] = useState<IRecipeIngredient[]>([]);
  const [curProduct, setCurProduct] = useState<IProduct>();
  const [curName, setCurName] = useState('');
  const [curAmount, setCurAmount] = useState(0);

  const clear = useCallback(() => {
    setCuringredients([]);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Select Ingredient</h2>
        <ProductsSelect onChange={setCurProduct} />
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
              curProduct && setCuringredients([...curingredients, { product: curProduct, amount: curAmount }]);
            }}
          >
            Add Ingredient
          </button>
        </div>
      </div>
      <div>
        <h2>Your recipe</h2>
        <input placeholder='enter name' value={curName} onChange={e => setCurName(e.target.value)} />
        <RecipeCard recipe={{ id: 0, ingredients: curingredients }} />
        <button onClick={clear} disabled={!curingredients.length}>
          Clear
        </button>
        <button
          disabled={!(curingredients.length && curName)}
          onClick={() => {
            addRecipe?.({ name: curName, ingredients: curingredients });
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
