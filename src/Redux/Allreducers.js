import { combineReducers } from 'redux';
import userReducer from './User/userSlice';
import dogReducer from './Dog/DogResultsRedux';
import nameReducers from './Names/NamesRedux';

const rootReducer = combineReducers({
  user: userReducer,
  names: nameReducers,
  dog: dogReducer,
});

export default rootReducer;
