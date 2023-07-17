import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  filters: {
    barking: 0,
    trainability: 0,
    goodWithChildren: 0,
    shedding: 0 
  },
};

// Create slice
const filters = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    }
  }
});

// Extract actions and reducer from the slice
export const { setFilter } = filters.actions;
export default filters.reducer;
