export const getAllUserInfo = () => (state) => state.reducer.user;
export const getUserName = () => (state) => state.reducer.user.username;
export const getUserEmail = () => (state) => state.reducer.user.email;
export const getUserPhone = () => (state) => state.reducer.user.phone;
