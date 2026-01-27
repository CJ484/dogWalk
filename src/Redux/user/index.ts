import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  email: string;
  phoneNumber: string;
}

const initialState: UserState = {
  username: '',
  email: '',
  phoneNumber: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => action.payload,
  },
});

export const { updateUser } = user.actions;
export default user.reducer;
