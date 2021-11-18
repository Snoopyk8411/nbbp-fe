import { ChangeEvent, FC, useCallback } from 'react';
import { connect } from 'react-redux';

import { IProduct, IProductsData } from 'store/cookbookProducts/interfaces';
import { getProducts, getIsLoading } from 'store/cookbookProducts/selectors';
import { RootState } from 'store/reducers';
import { NO_PRODUCTS } from './constants';

import styles from './productsSelect.module.css';

type ProductsSelectProps = {
  products?: IProductsData;
  onChange: (product: IProduct) => void;
};

export const ProductsSelect: FC<ProductsSelectProps> = ({ products = [], onChange }) => {
  const selectHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { target: { selectedIndex = undefined } = {} } = e || {};
      const selectedProduct = selectedIndex ? products[selectedIndex] : undefined;
      selectedProduct && onChange(selectedProduct);
    },
    [onChange, products],
  );
  return (
    <div>
      {products.length ? (
        <select className={styles.select} size={10} onChange={selectHandler}>
          {products.map(item => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      ) : (
        <div>{NO_PRODUCTS}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: getProducts(state),
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(ProductsSelect);
