
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

import { fetchCollectionsAsync, fetchCollectionsStart} from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaeMiddleware = createSagaMiddleware();

const middlewares = [sagaeMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaeMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };