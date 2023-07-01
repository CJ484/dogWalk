import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducers.js';

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store