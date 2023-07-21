import { createSlice } from '@reduxjs/toolkit';

export const Loading = createSlice({
  name: 'loading',
  initialState: {
    value: true,
  },
  reducers: {
    setLoading: (state, action) => {
      const loadingState = state;
      loadingState.value = action.payload;
    },
  },
});

export const { setLoading } = Loading.actions;

export default Loading.reducer;
