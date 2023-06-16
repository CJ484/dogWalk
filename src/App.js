import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPersonWalking,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import noPic from "./assets/noImage.png";
import "./globalStyles.scss";

function App() {
  return (
    <div className="App">
      <header>
        <h1>NeighborMyDog</h1>
        <div className="links">
          <div className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <h3>Explore Dogs</h3>
          </div>
          <div className="button">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <h3>Become A Walker</h3>
          </div>
        </div>
      </header>
      <div className="MainBanner">
        <h1>Show Social Skills for A dog's future family</h1>
        <div className="twoButtons">
          <button>
            <h2>Explore Neighborhood Dogs</h2>
          </button>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="FirstSection">
        <img src={noPic} alt="nothing yet" />
        <p>
          Approximately 4.1 million shelter animals are adopted each year (2
          million dogs). About 2 million dogs are adopted each year, but what
          about the other half needing a home. Most dogs are scared to go back
          out because they didn't have the guidance. With our help we can help
          them get their energenic personality and make them presentable to
          future families.
        </p>
      </div>
    </div>
  );
}

export default App;
