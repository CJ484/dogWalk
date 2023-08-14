import { combineReducers } from 'redux';
import userReducer from './User/UserSlice';
import dogReducer from './Dog/DogRedux';
import nameReducers from './Names/NamesRedux';

const rootReducer = combineReducers({
  user: userReducer,
  names: nameReducers,
  dog: dogReducer,
});

export default rootReducer;
