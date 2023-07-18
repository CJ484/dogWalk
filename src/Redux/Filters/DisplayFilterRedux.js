import { createSlice } from "@reduxjs/toolkit";

const displayFilters = createSlice({
  name: "displayFilters",
  initialState: {
    filterList: [],
  },
  reducers: {
    createList: (state, action) => {
      state.filterList = action.payload;
    },
    removeSelected: (state, action) => {
      state.filterList = state.filterList.filter(
        (index) => index !== action.payload
      );
    },
  },
});

export const { createList, removeSelected } = displayFilters.actions;
export default displayFilters.reducer;
