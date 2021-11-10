import * as React from 'react';
import { connect } from 'react-redux';

import store from 'store';
import { productsActions } from 'store/cookbookProducts/actions';
import { IProduct, IProductsData } from 'store/cookbookProducts/interfaces';
import { getProducts } from 'store/cookbookProducts/selectors';
import { RootState } from 'store/reducers';

import styles from './productsSelector.module.css';

type Props = {
  products?: IProductsData;
  loadProducts?: () => void;
  onChange: (product: IProduct) => void;
};

export const ProductsSelector: React.FC<Props> = ({ products = [], loadProducts = () => [], onChange }) => {
  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      {products.length ? (
        <select
          className={styles.select}
          size={10}
          onChange={e => {
            const selected: IProduct | undefined = products[e.target.selectedIndex];
            selected && onChange(selected);
          }}
        >
          {products.map(item => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ products: getProducts(state) });

const mapDispatchToProps = (dispatch: typeof store.dispatch) => ({ loadProducts: () => dispatch(productsActions.loadInitData([])) });

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSelector);
