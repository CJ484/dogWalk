import axios from "axios";
import urls from "../../const/urls";

export const apiDogCall = ({offsetAmount, parameters}) => {
  const dogApi = urls.dogNinjaApi;
  const key = process.env.REACT_APP_DOG;
  const activeParameters = `${dogApi}&offset=${offsetAmount}&${parameters}`
  const emptyParameters = `${dogApi}&offset=${offsetAmount}`;

  const urlRequest = parameters === undefined ? emptyParameters : activeParameters;

  return axios
    .get(urlRequest, {
      headers: { "X-Api-Key": key },
    })
    .then((results) => {
      return results.data
    })
    .catch((error) => {
      if(error.response?.status === 400) {
        console.error(`could not find url`, error.data);
        return undefined;
      }
    });
};
