import { isEqual } from 'lodash';

const ACTIVE_FILTER = 5;

const formatDogApiParams = ({ filters }) => {
  const newParameter = new URLSearchParams();

  Object.keys(filters).forEach((key) => {
    if (isEqual(filters[key], ACTIVE_FILTER)) {
      newParameter.append(key, filters[key]);
    } else {
      newParameter.delete(key);
    }
  });

  return newParameter.toString();
};

export default formatDogApiParams;
