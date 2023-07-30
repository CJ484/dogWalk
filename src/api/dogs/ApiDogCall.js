import axios from 'axios';
import urls from '../../const/urls';

const apiDogCall = async ({ offsetAmount, parameters }) => {
  const dogApi = urls.dogNinjaApi;
  const key = process.env.REACT_APP_DOG;
  const activeParameters = `${dogApi}?min_height=4&offset=${offsetAmount}&${parameters}`;
  const emptyParameters = `${dogApi}?min_height=4&offset=${offsetAmount}`;
  const urlRequest = parameters === undefined ? emptyParameters : activeParameters;
  return axios
    .get(urlRequest, {
      headers: { 'X-Api-Key': key },
    })
    // eslint-disable-next-line arrow-body-style
    .then((results) => { return results.data; })
    // eslint-disable-next-line no-console
    .catch(() => console.error('could not help with that request'));
};

export default apiDogCall;
