import { FC, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { IProduct, IProductsData } from 'store/cookbookProducts/interfaces';
import { getProducts, getIsLoading } from 'store/cookbookProducts/selectors';
import { RootState } from 'store/reducers';

import { NO_PRODUCTS } from './constants';

import productsSelectStyles from './productsSelect.module.css';

type ProductsSelectProps = {
  products?: IProductsData;
  onChange: (product: IProduct) => void;
};

export const ProductsSelect: FC<ProductsSelectProps> = ({ products = [], onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const selectHandler = useCallback(
    (index: number) => {
      const selectedProduct = products[index] || undefined;
      setSelectedIndex(index);
      selectedProduct && onChange(selectedProduct);
    },
    [onChange, products],
  );
  return (
    <div>
      {products.length ? (
        <div className={productsSelectStyles.select}>
          {products.map((item, idx) => (
            <div
              className={cn(productsSelectStyles.option, {
                [productsSelectStyles.selected as string]: idx === selectedIndex,
              })}
              key={item.id}
              onClick={() => selectHandler(idx)}
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

const mapStateToProps = (state: RootState) => ({
  products: getProducts(state),
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(ProductsSelect);
