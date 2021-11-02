import { put, takeEvery } from 'redux-saga/effects';

import { IWelcomePagaInitDataModel } from './interfaces';
import { welcomePageActions } from './actions';

import WP_INIT_MOCK_DATA from '../welcome-page-data-mock.json';

export default function* wpLoadInitDataWatcher(): Generator {
  yield takeEvery(welcomePageActions.loadInitData, wpLoadInitDataFlow);
}

function* wpLoadInitDataFlow() {
  try {
    yield put(welcomePageActions.setIsLoading(true));

    const initData: IWelcomePagaInitDataModel = WP_INIT_MOCK_DATA;
    yield put(welcomePageActions.setInitData(initData));

    yield put(welcomePageActions.setIsLoading(false));
  } catch (error: any) {
    yield put(welcomePageActions.setError(error as Error));
    yield put(welcomePageActions.setIsLoading(false));
  }
}
