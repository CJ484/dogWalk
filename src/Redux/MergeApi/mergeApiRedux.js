import { createSlice } from '@reduxjs/toolkit';

const mergeApiResults = createSlice({
  name: 'mergeResults',
  initialState: {
    results: [],
  },
  reducers: {
    addMergedResults: (state, action) => {
      const merge = state;
      merge.results = action.payload;
    },
  },
});

export const { addMergedResults } = mergeApiResults.actions;

export default mergeApiResults.reducer;
