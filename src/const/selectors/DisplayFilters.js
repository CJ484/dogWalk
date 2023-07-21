import { useSelector } from 'react-redux';

const FilterDogValuesSelector = () => useSelector((state) => state.reducer.filterDogs.filters);

export default FilterDogValuesSelector;
