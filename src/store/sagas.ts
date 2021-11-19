import { all } from 'redux-saga/effects';

import wpLoadInitDataWatcher from './welcome/saga-load-init-data';
import getMediaByDateWatcher from './gleb/saga-load-data';

export default function* indexSagas(): Generator<any> {
  yield all([getMediaByDateWatcher(), wpLoadInitDataWatcher()]);
}
