import { combineReducers } from 'redux';
import userReducer from './user/index';
import dogReducer from './dog/index';
import nameReducers from './names/index';

const rootReducer = combineReducers({
  user: userReducer,
  names: nameReducers,
  dog: dogReducer,
});

export default rootReducer;
