import { call, put, select, takeLatest, SagaReturnType } from 'redux-saga/effects';
import { TypeToGenerator } from 'tools/types/generator-types';
import { setPicture, getPicture, setError } from './slice';
import { requestGetPicture } from './request';
import { IPicture } from './interfaces';
import { selectDate } from './selectors';

export default function* getMediaByDateWatcher(): Generator {
  yield takeLatest(getPicture.type, getMediaByDateFlow);
}

type DataSagaReturn = SagaReturnType<typeof requestGetPicture>;
type DateSelectorReturn = SagaReturnType<typeof String>;

function* getMediaByDateFlow(): TypeToGenerator<IPicture> {
  try {
    const newDate: DateSelectorReturn = yield select(selectDate);
    const data: DataSagaReturn = yield call(requestGetPicture, newDate);
    yield put(setPicture({ ...data }));
  } catch (error) {
    yield put(setError(error as Error));
  }
}
