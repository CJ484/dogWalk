import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import "./globalStyles.scss";
import whitePaw from "./assets/orangePawPrint.png";
import Home from "./Pages/Home";
import DogWalkingPage from "./Pages/DogWalkingPage";
import NewProfile from "./Pages/CreateNewProfilePage";

function App() {
  return (
    <div className="App">
      <header>
        <Link exact="true" to="/"  className="HomeLink">
          <h1>NeighborMyDog</h1>
          <img src={whitePaw} alt="white paw" />
        </Link>
        <Link exact="true" to="/Pages/DogWalkingPage.js" className="links">
          <div className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <h3>Explore Dogs</h3>
          </div>
          <Link exact="true" to="/Pages/CreateNewProfilePage.js" className="button">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <h3>Become A Walker</h3>
          </Link>
        </Link>
      </header>

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/Pages/DogWalkingPage.js" element={<DogWalkingPage />} />
        <Route exact="true" path="/Pages/CreateNewProfilePage.js" element={<NewProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
