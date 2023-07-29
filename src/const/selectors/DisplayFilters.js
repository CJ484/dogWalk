import { useSelector } from 'react-redux';

const getFilterList = () => useSelector((state) => state.reducer.displayFilters.filterList);

export default getFilterList;
