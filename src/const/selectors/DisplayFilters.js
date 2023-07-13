import { useSelector } from "react-redux";

const FilterDogValuesSelector = () => {
  return useSelector((state) => state.reducer.filterDogs.filters);
};

export default FilterDogValuesSelector;


