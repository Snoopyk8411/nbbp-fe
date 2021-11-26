import { all } from 'redux-saga/effects';

import recipesLoadDataWatcher from './contributors/Ilia_Kotov/cookbookRecipes/saga-load-recipes';
import gpLoadPhotosPageWatcher from './contributors/ivanefimov/saga-load-photos';
import wpLoadInitDataWatcher from './welcome/saga-load-init-data';
import getMediaByDateWatcher from './gleb/saga-load-data';

export default function* indexSagas(): Generator<any> {
  yield all([wpLoadInitDataWatcher(), recipesLoadDataWatcher(), gpLoadPhotosPageWatcher(), getMediaByDateWatcher()]);
}
