import { all } from 'redux-saga/effects';

import wpLoadInitDataWatcher from './welcome/saga-load-init-data';
import mtLoadDataWatcher from './gleb/saga-load-data';

export default function* indexSagas(): Generator<any> {
  yield all([mtLoadDataWatcher()]);
  yield all([wpLoadInitDataWatcher()]);
}
