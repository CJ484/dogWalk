import { createSlice } from '@reduxjs/toolkit';

const UrlConstructSlice = createSlice({
  name: 'urlConstruct',
  initialState: {
    offsetAmount: 0,
    parameters: '',
  },
  reducers: {
    updateOffset: (state, action) => {
      const UrlConstruct = state;
      UrlConstruct.offsetAmount = action.payload;
    },
    updateParameters: (state, action) => {
      const UrlConstruct = state;
      UrlConstruct.parameters = action.payload;
    },
  },
});

export const { updateOffset, updateParameters } = UrlConstructSlice.actions;

export default UrlConstructSlice.reducer;
