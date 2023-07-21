import { createSlice } from '@reduxjs/toolkit';

const DogResults = createSlice({
  name: 'dogResults',
  initialState: {
    dogPen: [],
    results: [],
  },
  reducers: {
    setDataDog: (state, action) => {
      const resultsState = state;
      resultsState.results = action.payload;
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

export const { setDataDog, addToDogPen, removeFromDogPen } = DogResults.actions;

export default DogResults.reducer;
