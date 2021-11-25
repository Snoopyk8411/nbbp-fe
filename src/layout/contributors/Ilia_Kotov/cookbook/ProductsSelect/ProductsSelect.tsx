import { FC, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { IProduct, IProductsData } from 'store/contributors/Ilia_Kotov/cookbookProducts/interfaces';
import { selectError, selectProducts } from 'store/contributors/Ilia_Kotov/cookbookProducts/selectors';
import { RootState } from 'store/reducers';
import { ErrorMessage } from 'layout/contributors/Ilia_Kotov/cookbook/components/ErrorMessage';

import { LOAD_ERROR_TEXT, NO_PRODUCTS } from './constants';

import productsSelectStyles from './productsSelect.module.css';

type ProductsSelectProps = {
  products?: IProductsData;
  error?: Error;
  onChange?: (product: IProduct) => void;
};

export const ProductsSelect: FC<ProductsSelectProps> = ({ products = [], error, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const handleSelect = useCallback(
    (index: number) => {
      const selectedProduct = products[index];
      setSelectedIndex(index);
      selectedProduct && onChange?.(selectedProduct);
    },
    [onChange, products],
  );
  return (
    <div>
      {!!error && <ErrorMessage message={`${LOAD_ERROR_TEXT}: ${error.message}`} />}
      {products.length ? (
        <div className={productsSelectStyles.select}>
          {products.map((item, index) => (
            <div
              className={cn(productsSelectStyles.option, {
                [productsSelectStyles.selected as string]: index === selectedIndex,
              })}
              key={item.id}
              onClick={(): void => handleSelect(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        <div>{NO_PRODUCTS}</div>
      )}
    </div>
  );
};

const mapStateToProps = (
  state: RootState,
): {
  products?: IProductsData;
  error?: Error;
} => ({
  products: selectProducts(state),
  error: selectError(state),
});

export default connect(mapStateToProps)(ProductsSelect);
