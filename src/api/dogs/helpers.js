import { isEqual } from 'lodash';

const formatDogApiParams = ({ filterValues }) => {
  let lastUrl = '';
  const dogsRedux = filterValues;
  const newParameter = new URLSearchParams();

  const addParams = () => {
    Object.keys(dogsRedux).forEach((key) => {
      if (isEqual(dogsRedux[key], 5)) {
        newParameter.append(key, dogsRedux[key]);
      }
    });
  };

  const removeParams = () => {
    Object.keys(dogsRedux).forEach((key) => {
      if (isEqual(dogsRedux[key], 0)) {
        newParameter.delete(key);
      }
    });
  };

  addParams();
  removeParams();
  lastUrl = newParameter.toString();
  return lastUrl;
};

export default formatDogApiParams;
