
import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingSlice.js";
import userReducer from './User/userSlice.js';
import filterReducer from './Filters/FilterRedux.js';
import displayFiltersReducer from './Filters/DisplayFilterRedux.js';
import dogResultsReducer from './DogResults/DogResultsRedux.js'

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  filterDogs: filterReducer,
  displayFilters: displayFiltersReducer,
  dogResults: dogResultsReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
