import axios from 'axios';
import urls from '../../const/urls';

const apiNameCall = () => {
  const finalResults = () => {
    axios
      .get(`${urls.nameApi}?results=50&nat=us&inc=name`)
      .then((results) => results.data.results.map((a) => a.name.first))
      // eslint-disable-next-line no-console
      .catch((error) => console.error('could not find url', error.data));
  };
  return finalResults;
};

export default apiNameCall;
