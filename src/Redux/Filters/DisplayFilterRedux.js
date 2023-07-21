import { createSlice } from '@reduxjs/toolkit';

const displayFilters = createSlice({
  name: 'displayFilters',
  initialState: {
    filterList: [],
  },
  reducers: {
    createList: (state, action) => {
      const createListState = state;
      createListState.filterList = action.payload;
    },
    removeSelected: (state, action) => {
      const createListState = state;
      createListState.filterList = state.filterList.filter(
        (index) => index !== action.payload,
      );
    },
  },
});

export const { createList, removeSelected } = displayFilters.actions;
export default displayFilters.reducer;
