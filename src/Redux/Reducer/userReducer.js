// reducer.js
import Hello from '../Actions/actionsConts.js'
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const test = Hello

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(test);
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
