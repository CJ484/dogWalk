import { useEffect, useState } from 'react';
import FilterDogValuesSelector from '../../const/selectors/DisplayFilters';

const UrlParameters = () => {
  const filterDogsRedux = FilterDogValuesSelector();
  const [lastUrl, setLastUrl] = useState();

  useEffect(() => {
    const newParameter = new URLSearchParams();
    const addParams = () => {
      Object.keys(filterDogsRedux).forEach((key) => {
        if (filterDogsRedux[key] === 5) {
          newParameter.append(key, filterDogsRedux[key]);
        }
      });
    };
    const removeParams = () => {
      Object.keys(filterDogsRedux).forEach((key) => {
        if (filterDogsRedux[key] === '') {
          newParameter.delete(key, filterDogsRedux[key]);
        }
      });
    };
    addParams();
    removeParams();
    setLastUrl(`${newParameter.toString()}`);
  }, [filterDogsRedux, lastUrl]);

  return lastUrl;
};

export default UrlParameters;
