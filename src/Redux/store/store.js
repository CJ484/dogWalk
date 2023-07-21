import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Allreducers';

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
