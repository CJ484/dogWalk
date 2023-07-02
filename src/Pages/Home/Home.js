import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globalStyles.scss";
import { useTranslation } from 'react-i18next';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import cageDog from "../../assets/dogInCage.jpg";
import dogHug from "../../assets/huggingDog.jpg";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="HomePage">
      <div className="MainBanner">
        <h1>{t('home.banner')}</h1>
        <div className="twoButtons">
          <Link exact="true" to="/Pages/DogWalkingPage.js">
          <button>
            <h2>{t('home.bannerButton')}</h2>
          </button>
          </Link>
          <FontAwesomeIcon icon={faChevronDown} href="#FirstSection"/>
        </div>
      </div>
      <div className="FirstSection" id="FirstSection">
        <img src={dogHug} alt="nothing yet" />
        <p>{t('home.paragraph-1')}</p>
      </div>
      <div className="SecondSection">
        <p>{t('home.paragraph-2')}</p>
        <img src={cageDog} alt="nothing yet" />
      </div>
    </div>
  );
}

export default Home;
