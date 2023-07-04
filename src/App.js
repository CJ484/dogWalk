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
import Home from "./Pages/Home/Home.js";
import DogWalkingPage from "./Pages/DogResults/DogResultPage";
import CreateNewProfile from "./Pages/CreateNewProfile/CreateNewProfilePage";
import Languagelist from "./Components/LanguageList/LanguageList";
import { useTranslation } from "react-i18next";
import DogPen from "./Pages/DogPen/DogPen";
import CurrentProfile from "./Components/CurrentProfile/CurrentProfile";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header>
        <Link exact="true" to="/" className="HomeLink">
          <h1>{t("nav.title")}</h1>
          <img src={whitePaw} alt="white paw" />
        </Link>
        <Link exact="true" to="/Pages/DogResults/DogResultPage" className="links">
          <div className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <h3>{t("nav.explore")}</h3>
          </div>
        </Link>
        <Link exact="true" to="/Pages/CreateNewProfile/CreateNewProfilePage" className="links">
          <div className="button">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <h3>{t("nav.walker")}</h3>
          </div>
        </Link>
        <Link exact="true" to="/Pages/DogPen" className="links">
          <div className="button">
            <img className="icon" src={dogPen} alt="dogpen" />
            <h3>Dogpen</h3>
          </div>
        </Link>
        <div className="userAsNow">
          <CurrentProfile />
        </div>
        <Languagelist />
      </header>

      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route
          exact="true"
          path="/Pages/DogResults/DogResultPage"
          element={<DogWalkingPage />}
        />
        <Route
          exact="true"
          path="/Pages/CreateNewProfile/CreateNewProfilePage"
          element={<CreateNewProfile />}
        />
        <Route
          exact="true"
          path="/Pages/DogPen"
          element={<DogPen />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
