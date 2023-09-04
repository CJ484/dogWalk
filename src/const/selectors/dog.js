import { useSelector } from 'react-redux';

export const getDogResultsDogPen = () => useSelector((state) => state.reducer.dog.dogPen);
export const getDogData = () => useSelector((state) => state.reducer.dog.results);
export const getActiveFilterList = () => useSelector((state) => state.reducer.dog.activeFilters);
export const getDogLoading = () => useSelector((state) => state.reducer.dog.loading);
