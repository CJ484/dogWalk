import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Allreducers';
import rootSaga from '../../Sagas/AllSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
