import { all } from 'redux-saga/effects';

import gpLoadPhotosPageWatcher from './contributors/ivanefimov/saga-load-photos';
import wpLoadInitDataWatcher from './welcome/saga-load-init-data';

export default function* indexSagas(): Generator<any> {
  yield all([wpLoadInitDataWatcher(), gpLoadPhotosPageWatcher()]);
}
