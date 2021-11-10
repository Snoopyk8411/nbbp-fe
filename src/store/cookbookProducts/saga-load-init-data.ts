import { put, takeEvery } from 'redux-saga/effects';

import { IProductsData } from './interfaces';
import { productsActions } from './actions';

import PRODUCTS_INIT_MOCK_DATA from 'store/cookbook-products-data-mock.json';

export default function* productsLoadInitDataWatcher(): Generator {
  yield takeEvery(productsActions.loadInitData, productsLoadInitDataFlow);
}

function* productsLoadInitDataFlow() {
  try {
    yield put(productsActions.setIsLoading(true));

    const initData: IProductsData = PRODUCTS_INIT_MOCK_DATA as IProductsData;
    yield put(productsActions.setData(initData));

    yield put(productsActions.setIsLoading(false));
  } catch (error: any) {
    yield put(productsActions.setError(error as Error));
    yield put(productsActions.setIsLoading(false));
  }
}
