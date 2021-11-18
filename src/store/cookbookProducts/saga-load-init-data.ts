import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { TypeToGenerator } from 'store/utils/generator-types';
import { COOKBOOK_API } from 'src/constants';

import { IProductsData } from './interfaces';
import { productsActions } from './actions';

export default function* productsLoadInitDataWatcher(): Generator {
  yield takeEvery(productsActions.loadInitData, productsLoadInitDataFlow);
}

function* productsLoadInitDataFlow(): TypeToGenerator<IProductsData | Boolean | Error> {
  try {
    yield put(productsActions.setIsLoading(true));

    const data: IProductsData = yield call(() => axios.get<IProductsData>(COOKBOOK_API.products).then(res => res.data));

    yield put(productsActions.setData(data));

    yield put(productsActions.setIsLoading(false));
  } catch (error) {
    yield put(productsActions.setError(error as Error));
    yield put(productsActions.setIsLoading(false));
  }
}
