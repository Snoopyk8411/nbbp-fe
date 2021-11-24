import { call, put, takeEvery } from 'redux-saga/effects';
import { TypeToGenerator } from 'store/utils/generator-types';

import { recipesAction } from './actions';
import { IRecipeData } from './interfaces';
import { apiGetRecipes } from './api-get-recipes';

export default function* recipesLoadDataWatcher(): Generator {
  yield takeEvery(recipesAction.loadRecipes, recipesLoadDataFlow);
}

function* recipesLoadDataFlow(): TypeToGenerator<IRecipeData | Boolean | Error> {
  try {
    yield put(recipesAction.setIsLoading(true));
    const recipes: IRecipeData = yield call(() => apiGetRecipes());
    yield put(recipesAction.setRecipes(recipes));
  } catch (error) {
    yield put(recipesAction.setError(error as Error));
  } finally {
    yield put(recipesAction.setIsLoading(false));
  }
}
