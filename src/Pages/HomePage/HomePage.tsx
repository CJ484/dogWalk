import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.scss';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="HomePage">
      <div className="MainBanner">
        <h1>{t('home.banner')}</h1>
        <div className="twoButtons">
          <Link to="/Pages/DogResults/DogResultPage">
            <button type="button">
              <h2>{t('home.bannerButton')}</h2>
            </button>
          </Link>
          <FaChevronDown />
        </div>
      </div>
      <div className="FirstSection" id="FirstSection">
        <img src='/images/dogHug.jpg' alt="nothing yet" />
        <p>{t('home.paragraph-1')}</p>
      </div>
      <div className="SecondSection">
        <p>{t('home.paragraph-2')}</p>
        <img src='/images/cageDog.jpg' alt="nothing yet" />
      </div>
    </div>
  );
}

export default Home;
