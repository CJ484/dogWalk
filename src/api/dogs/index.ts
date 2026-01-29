import axios from 'axios';
import urls from '@/const/urls';

interface ApiDogCallParams {
  offsetAmount: number;
  parameters?: string;
}

const apiDogCall = async ({ offsetAmount, parameters }: ApiDogCallParams) => {
  const dogApi = urls.dogNinjaApi;
  const key = import.meta.env.VITE_DOG_API_KEY;

  const activeParameters = `${dogApi}?min_height=4&offset=${offsetAmount}&${parameters}`;
  const emptyParameters = `${dogApi}?min_height=4&offset=${offsetAmount}`;

  const urlRequest = parameters === undefined ? emptyParameters : activeParameters;

  return axios
    .get(urlRequest, {
      headers: { 'X-Api-Key': key },
    })
    .then((results) => results.data)
    // eslint-disable-next-line no-console
    .catch(() => console.error('could not help with that request'));
};

export default apiDogCall;
