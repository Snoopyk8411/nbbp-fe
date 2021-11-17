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
  products: IProductsData;
  setProducts?: (products: IProductsData) => void;
};

const CookbookPage: FC<CookbookProps> = ({ products, setProducts }) => {
  useEffect(() => {
    setProducts?.(products);
  }, []);
  return <Cookbook />;
};

export const getStaticProps: GetStaticProps = async () => {
  const products: IProductsData = await axios.get(COOKBOOK_API.products).then(res => res.data);
  return {
    props: { products }, // will be passed to the page component as props
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProducts: (products: IProductsData) => dispatch(productsActions.setData(products)),
});

export default connect(null, mapDispatchToProps)(CookbookPage);
