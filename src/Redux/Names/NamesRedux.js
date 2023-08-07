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
      const nameResults = state;
      nameResults.results = action.payload;
    },
    fetchNameError: (state, action) => {
      const nameResults = state;
      nameResults.error = action.payload;
    },
  },
});
export const { fetchNameDataStart, fetchNameSuccess, fetchNameError } = NameResults.actions;

export default NameResults.reducer;
