
import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingSlice.js";
import userReducer from './User/userSlice.js';
import filterReducer from './Filters/FilterRedux.js';

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  filterDogs: filterReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
