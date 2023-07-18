import axios from "axios";
import urls from "../../const/urls";

export const apiNameCall = () => {
  return axios
    .get(`${urls.nameApi}?results=50&nat=us&inc=name`)
    .then((results) => {
        return results.data.results.map((a) => a.name.first)
    })
    .catch((error) => {
      if (error.response?.status === 400) {
        console.error(`could not find url`, error.data);
        return undefined;
      }
    });
}