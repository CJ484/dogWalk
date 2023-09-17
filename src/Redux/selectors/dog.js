export const getDogResultsDogPen = () => (state) => state.reducer.dog.dogPen;
export const getDogData = () => (state) => state.reducer.dog.results;
export const getActiveFilterList = () => (state) => state.reducer.dog.activeFilters;
export const getDogLoading = () => (state) => state.reducer.dog.loading;
