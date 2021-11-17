import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware, compose, Store } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';
import sagas from './sagas';

const composeEnhancers =
  (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const createdStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(sagas);

  return createdStore;
};

const store = configureStore();
export default store;
