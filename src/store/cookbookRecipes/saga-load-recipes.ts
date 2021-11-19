import { call, put, takeEvery } from 'redux-saga/effects';
import { recipesAction } from './actions';
import { IRecipeData } from './interfaces';

import { TypeToGenerator } from 'store/utils/generator-types';
import axios from 'axios';
import { COOKBOOK_API } from 'src/constants';

export default function* recipesLoadDataWatcher() {
  yield takeEvery(recipesAction.loadRecipes, recipesLoadDataFlow);
}

function* recipesLoadDataFlow(): TypeToGenerator<IRecipeData | Boolean | Error> {
  try {
    yield put(recipesAction.setIsLoading(true));
    const recipes: IRecipeData = yield call(() => axios.get<IRecipeData>(COOKBOOK_API.recipes).then(res => res.data));
    yield put(recipesAction.setRecipes(recipes));
  } catch (error) {
    yield put(recipesAction.setError(error as Error));
  } finally {
    yield put(recipesAction.setIsLoading(false));
  }
}
