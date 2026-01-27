import axios from 'axios';
import urls from '../../const/urls';

const apiNameCall = async (): Promise<string[]> => {
  const call = axios
    .get(`${urls.nameApi}?results=50&nat=us&inc=name`)
    .then((results) => results.data.results.map((a: any) => a.name.first))
    // eslint-disable-next-line no-console
    .catch(() => console.error('Something Went Wrong in that Request'));

  return call;
};

export default apiNameCall;
