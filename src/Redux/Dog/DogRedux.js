/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const Dog = createSlice({
  name: 'dog',
  initialState: {
    filters: {
      barking: 0,
      trainability: 0,
      good_with_children: 0,
      shedding: 0,
    },
    activeFilters: [],
    dogPen: [],
    offsetAmount: 0,
    loading: false,
    error: null,
    results: [],
  },
  reducers: {
    updateOffset: (state, action) => {
      state.offsetAmount = action.payload;
    },
    addDogResults: (state, action) => {
      state.results = action.payload;
    },
    fetchDogDataFailure: (state, action) => {
      state.error = action.payload;
    },
    addToDogPen: (state, action) => {
      state.dogPen.push(action.payload);
    },
    removeFromDogPen: (state, action) => {
      state.dogPen = state.dogPen.filter((index) => index !== action.payload);
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    createList: (state, action) => {
      state.activeFilters = action.payload;
    },
    removeSelected: (state, action) => {
      state.activeFilters = state.activeFilters.filter(
        (index) => index !== action.payload,
      );
    },
  },
});

export const {
  addToDogPen, removeFromDogPen, addDogResults,
  fetchDogDataFailure, changeLoading, setFilter, createList, removeSelected,
  updateOffset,
} = Dog.actions;

export default Dog.reducer;
