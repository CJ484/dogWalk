import { useSelector } from 'react-redux';

const getFilterValue = () => useSelector((state) => state.reducer.filterDogs.filters);

export default getFilterValue;
