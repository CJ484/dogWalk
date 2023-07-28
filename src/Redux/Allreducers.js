import { combineReducers } from 'redux';
import loadingReducer from './Loading/LoadingSlice';
import userReducer from './User/userSlice';
import filterReducer from './Filters/FilterRedux';
import displayFiltersReducer from './Filters/DisplayFilterRedux';
import dogResultsReducer from './DogResults/DogResultsRedux';

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  filterDogs: filterReducer,
  displayFilters: displayFiltersReducer,
  dogResults: dogResultsReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
