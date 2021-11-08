import { call, put, takeLatest, SagaReturnType } from 'redux-saga/effects';
import { TypeToGenerator } from 'tools/types/generator-types';
import { setPicture, getPicture } from './slice';
import { requestGetPicture } from './request';
import { IPicture } from './interfaces';

export default function* mtLoadDataWatcher(): Generator {
  yield takeLatest(getPicture.type, handleGetPicture);
}

type Data = SagaReturnType<typeof requestGetPicture>;

function* handleGetPicture(): TypeToGenerator<IPicture> {
  try {
    const data: Data = yield call(requestGetPicture);
    yield put(setPicture({ ...data }));
  } catch (error: any) {
    console.log(error);
  }
}
