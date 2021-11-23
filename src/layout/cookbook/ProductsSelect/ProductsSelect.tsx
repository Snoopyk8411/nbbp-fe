import { FC, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { IProduct, IProductsData } from 'store/cookbookProducts/interfaces';
import { selectProducts } from 'store/cookbookProducts/selectors';
import { RootState } from 'store/reducers';
import { ErrorFrame } from 'layout/cookbook/ui/ErrorFrame';

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
      const selectedProduct = products[index] || undefined;
      setSelectedIndex(index);
      selectedProduct && onChange?.(selectedProduct);
    },
    [onChange, products],
  );
  return (
    <div>
      {!!error && <ErrorFrame message={`${LOAD_ERROR_TEXT}: ${error.message}`} />}
      {products.length ? (
        <div className={productsSelectStyles.select}>
          {products.map((item, idx) => {
            return (
              <div
                className={cn(productsSelectStyles.option, {
                  [productsSelectStyles.selected as string]: idx === selectedIndex,
                })}
                key={item.id}
                onClick={(): void => handleSelect(idx)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div>{NO_PRODUCTS}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState): Partial<ProductsSelectProps> => ({
  products: selectProducts(state),
  error: state.products.error,
});

export default connect(mapStateToProps)(ProductsSelect);
