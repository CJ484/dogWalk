import { useSelector } from 'react-redux';

export const getDogResultsDogPen = () => useSelector((state) => state.reducer.dogResults.dogPen);
export const getDogResults = () => useSelector((state) => state.reducer.dogResults.results);
