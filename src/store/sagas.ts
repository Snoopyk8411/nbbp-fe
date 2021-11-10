import { all } from 'redux-saga/effects';

import productsLoadInitDataWatcher from './cookbookProducts/saga-load-init-data';
import recipesLoadInitDataWatcher from './cookbookRecipes/saga-load-init-data';
import wpLoadInitDataWatcher from './welcome/saga-load-init-data';

export default function* indexSagas(): Generator<any> {
  yield all([wpLoadInitDataWatcher(), productsLoadInitDataWatcher(), recipesLoadInitDataWatcher()]);
}
