import { Routes, Route, Link } from 'react-router-dom';
import { FaMagnifyingGlass, FaPersonWalking } from 'react-icons/fa6';
import './styles/globalStyles.scss';
import { useTranslation } from 'react-i18next';
import whitePaw from './assets/orangePawPrint.png';
import { LanguageList, CurrentProfile, DogPenNavButton } from './Components';
import routes from './const/routes';

export default function Layout() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <Link to="/" className="HomeLink">
          <h1>{t('nav.title')}</h1>
          <img src={whitePaw} alt="white paw" />
        </Link>

        {routes.map((route) => (
          <Link
            key={route.title}
            to={route.path}
            className="links"
          >
            <div className="button">
              {route.icon}
              <h3>{route.title}</h3>
            </div>
          </Link>
        ))}
        <CurrentProfile path="/Pages/CurrentProfile.CurrentProfilePage" />
        <LanguageList />
      </header>

      <Routes>
        {Object.values(routes).map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={route.element}
          />
        ))}

      </Routes>
    </div>
  );
}

