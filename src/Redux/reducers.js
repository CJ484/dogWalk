
import { combineReducers } from "redux";
import loadingStateReducer from "./Loading/LoadingSlice.js";
import userReducer from './User/userSlice.js';

const rootReducer = combineReducers({
  loadingState: loadingStateReducer,
  user: userReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
