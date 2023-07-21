import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    barking: 0,
    trainability: 0,
    goodWithChildren: 0,
    shedding: 0,
  },
};

const filters = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const filterState = state;
      const { key, value } = action.payload;
      filterState.filters[key] = value;
    },
  },
});

// Extract actions and reducer from the slice
export const { setFilter } = filters.actions;
export default filters.reducer;
