import { isEqual } from 'lodash';

const ACTIVE_FILTER = 5;

interface Filters {
  [key: string]: number;
}

interface FormatDogApiParamsInput {
  filters: Filters;
}

const formatDogApiParams = ({ filters }: FormatDogApiParamsInput): string => {
  const newParameter = new URLSearchParams();

  Object.keys(filters).forEach((key) => {
    if (isEqual(filters[key], ACTIVE_FILTER)) {
      newParameter.append(key, filters[key].toString());
    } else {
      newParameter.delete(key);
    }
  });

  return newParameter.toString();
};

export default formatDogApiParams;
