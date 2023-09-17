import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    phoneNumber: '',
  },
  reducers: {
    updateUser: (state, action) => action.payload,
  },
});

export const { updateUser } = user.actions;
export default user.reducer;
