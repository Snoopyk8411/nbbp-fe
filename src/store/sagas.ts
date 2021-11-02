import { all } from 'redux-saga/effects';

import wpLoadInitDataWatcher from './welcome/saga-load-init-data';

export default function* indexSagas(): Generator<any> {
  yield all([
    wpLoadInitDataWatcher(),
  ]);
}
