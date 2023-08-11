const UrlParameters = ({ filterValues }) => {
  const filterDogsRedux = filterValues;
  let lastUrl = '';

  const updateUrl = () => {
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
          newParameter.delete(key);
        }
      });
    };

    addParams();
    removeParams();
    lastUrl = newParameter.toString();
  };

  const handleFilterChange = () => {
    updateUrl();
  };

  handleFilterChange();

  return lastUrl;
};

export default UrlParameters;
