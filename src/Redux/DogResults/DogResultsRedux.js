import { createSlice } from '@reduxjs/toolkit';

const DogResults = createSlice({
  name: 'dogResults',
  initialState: {
    dogPen: [],
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDogDataStart: (state) => {
      const dogResultState = state;
      dogResultState.loading = true;
      dogResultState.error = null;
    },
    fetchDogDataSuccess: (state, action) => {
      const resultsState = state;
      resultsState.results = action.payload;
      resultsState.loading = false;
    },
    fetchDogDataFailure: (state, action) => {
      const initialState = state;
      initialState.loading = false;
      initialState.error = action.payload;
    },
    addToDogPen: (state, action) => {
      const dogPenState = state;
      dogPenState.dogPen.push(action.payload);
    },
    removeFromDogPen: (state, action) => {
      const dogPenState = state;
      dogPenState.dogPen = state.dogPen.filter((index) => index !== action.payload);
    },
  },
});

export const {
  addToDogPen, removeFromDogPen, fetchDogDataStart, fetchDogDataSuccess,
  fetchDogDataFailure,
} = DogResults.actions;

export default DogResults.reducer;
