import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    phoneNumber: "",
  },
  reducers: {
    updateUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
