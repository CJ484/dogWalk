import { RootState } from '../MiddleWare/index';

export const getAllUserInfo = (state: RootState) => state.reducer.user;
export const getUserName = () => (state: RootState) => state.reducer.user.username;
export const getUserEmail = () => (state: RootState) => state.reducer.user.email;
export const getUserPhone = () => (state: RootState) => state.reducer.user.phoneNumber;
