import axios from "axios";

import './DogResults.styles.scss'
import pic from "../../assets/dogInCage.jpg";
import { useEffect } from "react";
function DogResults() {

  useEffect(() => {
      results();
  })

  const holdThis = process.env.REACT_APP_RUFF_RUFF
  const headers = {
    'X-Api-Key': holdThis,
  }
  const name = 'golden retriever';

  async function results() {
    await axios
    .get(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
    headers: headers,
    contentType: 'application/json',
  })
  .then((results) => {
    console.log(results);
  })
  } 
  return (
    <div className="dogResults">
      <img src={pic} alt="example" />
   </div>
  );
}

export default DogResults;
