import { all } from 'redux-saga/effects';

import recipesLoadDataWatcher from './cookbookRecipes/saga-load-recipes';
import gpLoadPhotosPageWatcher from './contributors/ivanefimov/saga-load-photos';
import wpLoadInitDataWatcher from './welcome/saga-load-init-data';

export default function* indexSagas(): Generator<any> {
  yield all([wpLoadInitDataWatcher(), recipesLoadDataWatcher(), gpLoadPhotosPageWatcher()]);
}
