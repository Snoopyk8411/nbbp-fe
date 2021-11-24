import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';

import { COOKBOOK_API } from 'store/contributors/Ilia_Kotov/constants';
import { Cookbook } from 'layout/contributors/Ilia_Kotov/cookbook';
import { ErrorFrame } from 'layout/contributors/Ilia_Kotov/cookbook/components/ErrorFrame';
import { IProductsData } from 'store/contributors/Ilia_Kotov/cookbookProducts/interfaces';
import { productsActions } from 'store/contributors/Ilia_Kotov/cookbookProducts/actions';

import { NextPageWithLayout } from './types';

type CookbookProps = {
  products?: IProductsData;
  error?: Error;
  setProducts?: (products: IProductsData) => void;
  setError?: (error: Error) => void;
};

const CookbookPage: NextPageWithLayout<CookbookProps> = ({
  products = [],
  error,
  setProducts,
  setError,
}: CookbookProps) => {
  useEffect(() => {
    setProducts?.(products);
    error && setError?.(error);
  }, []);
  return <Cookbook />;
};

CookbookPage.getLayout = (page: NextPage): JSX.Element => (
  <>
    <ErrorFrame />
    {page}
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return await axios
    .get(COOKBOOK_API.products)
    .then(res => ({
      props: { products: res.data },
    }))
    .catch(error => ({
      props: { products: [], error: JSON.parse(JSON.stringify(error)) },
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
