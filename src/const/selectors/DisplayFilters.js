import { useSelector } from 'react-redux';

const getFilterList = () => useSelector((state) => state.reducer.dog.activeFilters);

export default getFilterList;
