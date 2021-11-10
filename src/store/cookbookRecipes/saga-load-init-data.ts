import { put, takeEvery } from 'redux-saga/effects';
import { recipesAction } from './actions';
import { IRecipeData } from './interfaces';

import RECIPES_INIT_MOCK_DATA from '../cookbook-recipes-data-mock.json';

export default function* recipesLoadInitDataWatcher() {
  yield takeEvery(recipesAction.loadInitData, recipesLoadInitDataFlow);
}

function* recipesLoadInitDataFlow() {
  const recipes: IRecipeData = RECIPES_INIT_MOCK_DATA as IRecipeData;
  yield put(recipesAction.setRecipes(recipes));
}
