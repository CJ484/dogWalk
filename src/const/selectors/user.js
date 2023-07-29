import { useSelector } from 'react-redux';

export const getAllUserInfo = () => useSelector((state) => state.reducer.user);
export const getUserName = () => useSelector((state) => state.reducer.user.username);
export const getUserEmail = () => useSelector((state) => state.reducer.user.email);
export const getUserPhone = () => useSelector((state) => state.reducer.user.phone);
