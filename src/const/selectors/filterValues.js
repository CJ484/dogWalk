import { useSelector } from 'react-redux';

const getFilterValue = () => useSelector((state) => state.reducer.dog.filters);

export default getFilterValue;
