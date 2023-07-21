import axios from 'axios';
import urls from '../../const/urls';

const apiDogCall = async ({ offsetAmount, parameters }) => {
  const dogApi = urls.dogNinjaApi;
  const key = process.env.REACT_APP_DOG;
  const activeParameters = `${dogApi}?min_height=4&offset=${offsetAmount}&${parameters}`;
  const emptyParameters = `${dogApi}?min_height=4&offset=${offsetAmount}`;
  const urlRequest = parameters === undefined ? emptyParameters : activeParameters;
  const finalResults = () => {
    axios
      .get(urlRequest, {
        headers: { 'X-Api-Key': key },
      })
      .then((results) => results.data)
      // eslint-disable-next-line no-console
      .catch((error) => console.error('could not find url', error.data));
  };
  return finalResults;
};

export default apiDogCall;
