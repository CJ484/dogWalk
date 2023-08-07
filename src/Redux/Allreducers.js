import { combineReducers } from 'redux';
import loadingReducer from './Loading/LoadingSlice';
import userReducer from './User/userSlice';
import filterReducer from './Filters/FilterRedux';
import displayFiltersReducer from './Filters/DisplayFilterRedux';
import dogResultsReducer from './DogResults/DogResultsRedux';
import nameReducers from './Names/NamesRedux';
import mergeReducers from './MergeApi/mergeApiRedux';
import UrlConstructReducers from './UrlConstruct/UrlConstrucRedux';

const rootReducer = combineReducers({
  loading: loadingReducer,
  urlConst: UrlConstructReducers,
  user: userReducer,
  filterDogs: filterReducer,
  displayFilters: displayFiltersReducer,
  mergedApi: mergeReducers,
  names: nameReducers,
  dogResults: dogResultsReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
