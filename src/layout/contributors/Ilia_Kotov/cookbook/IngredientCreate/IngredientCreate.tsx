import { ChangeEvent, FC, useState } from 'react';

import { IProduct } from 'store/contributors/Ilia_Kotov/cookbookProducts/interfaces';
import { IRecipeIngredient } from 'store/contributors/Ilia_Kotov/cookbookRecipes/interfaces';
import { AMOUNT_NAME, AMOUNT_PLACEHOLDER } from 'layout/contributors/Ilia_Kotov/cookbook/constants';

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

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>): void => {
    const { target: { value = INITIAL_AMOUNT } = {} } = e || {};
    isAmountValid(value) && setAmount(value);
  };

  const handleCreateIngredient = (): void => {
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
        onChange={handleChangeAmount}
      />
      <button className={ingredientCreateStyles.margin} disabled={!isReady} onClick={handleCreateIngredient}>
        {ADD_INGREDIENT}
      </button>
    </div>
  );
};
