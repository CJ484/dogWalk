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
import Languagelist from "./Components/LanguageList/LanguageList";
import { useTranslation } from "react-i18next";
import CurrentProfile from "./Components/CurrentProfile/CurrentProfile";
import { useSelector } from "react-redux";
import routes from "./const/selectors/paths";

function App() {
  const { t } = useTranslation();
  const dogPenNumber = useSelector(
    (state) => state.reducer.dogResults.dogPen.length
  );

  const DogPen = () => {
    if (dogPenNumber === 0) {
      return (
        <div className="button">
          <img className="icon" src={dogPen} alt="dogpen" />
          <h3>{t('dogpen.title')}</h3>
        </div>
      );
    } else {
      return (
        <div className="button">
          <img className="icon" src={dogPen} alt="dogpen" />
          <h3>{t('dogpen.title')}</h3>
          <h6>({dogPenNumber})</h6>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header>
        <Link exact="true" to={routes[0].path} className="HomeLink">
          <h1>{t("nav.title")}</h1>
          <img src={whitePaw} alt="white paw" />
        </Link>
        <Link
          exact="true"
          to={routes[1].path}
          className="links"
        >
          <div className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <h3>{t("nav.explore")}</h3>
          </div>
        </Link>
        <Link
          exact="true"
          to={routes[2].path}
          className="links"
        >
          <div className="button">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <h3>{t("nav.walker")}</h3>
          </div>
        </Link>
        <Link exact="true" to={routes[3].path} className="links">
          <DogPen />
        </Link>
        <CurrentProfile className="links" />
        <Languagelist />
      </header>

      <Routes>
        {routes.map((route, index) => (
          <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.element}
          />
        ))}

      </Routes>
    </div>
  );
}

export default App;
