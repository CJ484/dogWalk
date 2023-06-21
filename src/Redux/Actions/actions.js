// actions.js

export const setFirstName = (firstName) => {
  return {
    type: "SET_FIRST_NAME",
    payload: firstName,
  };
};

export const setLastName = (lastName) => {
  return {
    type: "SET_LAST_NAME",
    payload: lastName,
  };
};

export const setEmail = (email) => {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
};

export const clearForm = () => {
  return {
    type: "CLEAR_FORM",
  };
};
