import { RootState } from '../MiddleWare/index';

export const getDogResultsDogPen = () => (state: RootState) => state.reducer.dog.dogPen;
export const getDogData = () => (state: RootState) => state.reducer.dog.results;
export const getActiveFilterList = () => (state: RootState) => state.reducer.dog.activeFilters;
export const getDogLoading = () => (state: RootState) => state.reducer.dog.loading;
