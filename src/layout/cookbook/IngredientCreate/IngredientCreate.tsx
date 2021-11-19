import { ChangeEvent, FC, useState } from 'react';

import { IProduct } from 'store/cookbookProducts/interfaces';
import { IRecipeIngredient } from 'store/cookbookRecipes/interfaces';
import { AMOUNT_NAME, AMOUNT_PLACEHOLDER } from 'layout/cookbook/constants';

import { ADD_INGREDIENT } from './constants';
import ingredientCreateStyles from './ingredientCreate.module.css';

type IngredientCreateProps = {
  product?: IProduct;
  onCreate: (ingredient: IRecipeIngredient) => void;
};

const INITIAL_AMOUNT = '';

const isAmountValid = (amount: number | string | undefined): amount is number => Number(amount) >= 0;

export const IngredientCreate: FC<IngredientCreateProps> = ({ product, onCreate }) => {
  const [amount, setAmount] = useState<string>(INITIAL_AMOUNT);

  const isReady = product?.id && product.name && isAmountValid(amount) && amount > 0;

  const changeAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value = INITIAL_AMOUNT } = {} } = e || {};
    isAmountValid(value) && setAmount(value);
  };

  const createIngredientHandler = () => {
    isReady && onCreate({ product, amount });
  };

  return (
    <div className={ingredientCreateStyles.wrapper}>
      <div className={ingredientCreateStyles.margin}>{product?.name}</div>
      <input
        className={ingredientCreateStyles.margin}
        value={amount}
        name={AMOUNT_NAME}
        placeholder={AMOUNT_PLACEHOLDER}
        onChange={changeAmountHandler}
      />
      <button className={ingredientCreateStyles.margin} disabled={!isReady} onClick={createIngredientHandler}>
        {ADD_INGREDIENT}
      </button>
    </div>
  );
};
