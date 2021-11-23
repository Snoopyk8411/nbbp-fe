import { call, put, select, takeLatest, SagaReturnType } from 'redux-saga/effects';
import { TypeToGenerator } from 'tools/types/generator-types';
import { setMedia, getMedia, setError, setIsLoading } from './slice';
import { requestGetMedia } from './request';
import { IMedia } from './interfaces';
import { selectDate } from './selectors';

export default function* getMediaByDateWatcher(): Generator {
  yield takeLatest(getMedia.type, getMediaByDate);
}

type DataSagaReturn = SagaReturnType<typeof requestGetMedia>;
type DateSelectorReturn = SagaReturnType<typeof String>;

function* getMediaByDate(): TypeToGenerator<IMedia | boolean> {
  try {
    yield put(setIsLoading(true));
    const newDate: DateSelectorReturn = yield select(selectDate);
    const data: DataSagaReturn = yield call(requestGetMedia, newDate);
    yield put(setMedia({ ...data }));
  } catch (error) {
    yield put(setError(error as Error));
  } finally {
    yield put(setIsLoading(false));
  }
}
