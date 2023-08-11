import { useSelector } from 'react-redux';

export const getDogResultsDogPen = () => useSelector((state) => state.reducer.dog.dogPen);
export const getDogResults = () => useSelector((state) => state.reducer.dog.results);
