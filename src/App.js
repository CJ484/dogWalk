import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import "./globalStyles.scss";
import dogPen from "./assets/dogPen.png";
import whitePaw from "./assets/orangePawPrint.png";
import Home from "./Pages/Home";
import DogWalkingPage from "./Pages/DogWalkingPage";
import NewProfile from "./Pages/CreateNewProfilePage";
import Languagelist from "./Components/LanguageList/LanguageList";
import { useTranslation } from "react-i18next";
import DogPen from "./Pages/DogPen/DogPen";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header>
        <Link exact="true" to="/" className="HomeLink">
          <h1>{t("nav.title")}</h1>
          <img src={whitePaw} alt="white paw" />
        </Link>
        <Link exact="true" to="/Pages/DogWalkingPage.js" className="links">
          <div className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <h3>{t("nav.explore")}</h3>
          </div>
        </Link>
        <Link exact="true" to="/Pages/CreateNewProfilePage.js" className="links">
          <div className="button">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <h3>{t("nav.walker")}</h3>
          </div>
        </Link>
        <Link exact="true" to="/Pages/DogPen.js" className="links">
          <div className="button">
            <img className="icon" src={dogPen} alt="dogpen" />
            <h3>Dogpen</h3>
          </div>
        </Link>
        <Languagelist />
      </header>

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route
          exact="true"
          path="/Pages/DogWalkingPage.js"
          element={<DogWalkingPage />}
        />
        <Route
          exact="true"
          path="/Pages/CreateNewProfilePage.js"
          element={<NewProfile />}
        />
        <Route
          exact="true"
          path="/Pages/DogPen.js"
          element={<DogPen />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
