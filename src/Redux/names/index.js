/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const NameResults = createSlice({
  name: 'nameResults',
  initialState: {
    results: [],
    error: null,
  },
  reducers: {
    fetchNameDataStart: () => {},
    fetchNameSuccess: (state, action) => {
      state.results = action.payload;
    },
    fetchNameError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { fetchNameDataStart, fetchNameSuccess, fetchNameError } = NameResults.actions;

export default NameResults.reducer;
