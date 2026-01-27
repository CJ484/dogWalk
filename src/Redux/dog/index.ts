/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DogFilters {
  barking: number;
  trainability: number;
  good_with_children: number;
  shedding: number;
  [key: string]: number;
}

interface DogState {
  filters: DogFilters;
  activeFilters: string[];
  dogPen: number[];
  offsetAmount: number;
  loading: boolean;
  error: string | null;
  results: any[];
}

const initialState: DogState = {
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
};

const Dog = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    updateOffset: (state, action: PayloadAction<number>) => {
      state.offsetAmount = action.payload;
    },
    addDogResults: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload;
    },
    fetchDogDataFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addToDogPen: (state, action: PayloadAction<number>) => {
      state.dogPen.push(action.payload);
    },
    removeFromDogPen: (state, action: PayloadAction<number>) => {
      state.dogPen = state.dogPen.filter((index) => index !== action.payload);
    },
    changeLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFilter: (state, action: PayloadAction<{ key: string; value: number }>) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    createList: (state, action: PayloadAction<string[]>) => {
      state.activeFilters = action.payload;
    },
    removeSelected: (state, action: PayloadAction<string>) => {
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
