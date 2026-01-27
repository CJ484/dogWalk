/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameState {
  results: any[];
  error: string | null;
}

const initialState: NameState = {
  results: [],
  error: null,
};

const NameResults = createSlice({
  name: 'nameResults',
  initialState,
  reducers: {
    fetchNameDataStart: () => {},
    fetchNameSuccess: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload;
    },
    fetchNameError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { fetchNameDataStart, fetchNameSuccess, fetchNameError } = NameResults.actions;

export default NameResults.reducer;
