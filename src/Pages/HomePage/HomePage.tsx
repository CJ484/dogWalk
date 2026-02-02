import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HomePage.scss';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="homePage">
      <div className="homePage__banner">
        <img className="homePage__banner__image" src='/images/happyFamily.jpg' alt="nothing yet" />
        <h1 className="homePage__banner__title">{t('home.banner')}</h1>
        <Link className="homePage__banner__button" to="/explore-dogs">
          <span className="homePage__banner__button__text">{t('home.bannerButton')}</span>
        </Link>
      </div>
      <div className="homePage__section">
        <img className="homePage__section__image" src='/images/huggingDog.jpg' alt="nothing yet" />
        <p className="homePage__section__paragraph">{t('home.paragraph-1')}</p>
      </div>
      <div className="homePage__section">
        <p className="homePage__section__paragraph">{t('home.paragraph-2')}</p>
        <img className="homePage__section__image" src='/images/dogInCage.jpg' alt="nothing yet" />
      </div>
    </div>
  );
}

export default Home;
