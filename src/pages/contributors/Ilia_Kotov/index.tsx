import axios from 'axios';
import { COOKBOOK_API } from 'src/constants';
import { Cookbook } from 'layout/cookbook';
import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { IProductsData } from 'store/cookbookProducts/interfaces';
import { productsActions } from 'store/cookbookProducts/actions';
import { connect } from 'react-redux';

type CookbookProps = {
  products?: IProductsData;
  error?: Error;
  setProducts?: (products: IProductsData) => void;
  setError?: (error: Error) => void;
};

const CookbookPage: FC<CookbookProps> = ({ products = [], error, setProducts, setError }) => {
  useEffect(() => {
    setProducts?.(products);
    error && setError?.(error);
  }, []);
  return <Cookbook />;
};

export const getStaticProps: GetStaticProps = async () => {
  return await axios
    .get(COOKBOOK_API.products)
    .then(res => ({
      props: { products: res.data },
    }))
    .catch(error => ({
      props: { products: [], error },
    }));
};

const mapDispatchToProps = (dispatch: Dispatch): Partial<CookbookProps> => ({
  setProducts: (products: IProductsData): void => {
    dispatch(productsActions.setData(products));
  },
  setError: (error: Error): void => {
    dispatch(productsActions.setError(error));
  },
});

export default connect(null, mapDispatchToProps)(CookbookPage);
