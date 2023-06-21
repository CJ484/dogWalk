// reducer.js
import { SET_USER } from '../Actions/actionsConts.js'
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const profileReducer = (state = initialState, action, SET_USER) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        firstName: action.payload,
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "CLEAR_FORM":
      return initialState;
    default:
      return state;
  }
};

export default profileReducer;
