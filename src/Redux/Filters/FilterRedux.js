import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  filters: {
    barking: "",
    trainability: "",
    goodWithChildren: "",
    shedding: "" },
};

// Create slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filter[key] = value;
    }
  }
});

// Extract actions and reducer from the slice
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
