import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import rootSaga from '../../Sagas/index';
import userReducer from '../user/index';
import dogReducer from '../dog/index';
import nameReducers from '../names/index';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
  names: nameReducers,
  dog: dogReducer,
});

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
