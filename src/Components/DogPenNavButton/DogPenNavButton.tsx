import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getDogResultsDogPen } from '@/Redux/selectors/dog';
import { RootState } from '@/Redux/MiddleWare/index';
import './DogPenNavButton.scss';

export default function DogPenNavButton() {
  const { t } = useTranslation();
  const location = useLocation();
  const dogPenNumber = useSelector((state: RootState) => getDogResultsDogPen()(state)).length;
  const hasDogs = dogPenNumber > 0;
  const isActive = location.pathname === '/dog-pen';
  
  return (
    <Link 
      to="/dog-pen"
      className={`dogPenNavButton ${isActive ? 'dogPenNavButton--active' : ''}`}
      aria-label={`${t('dogpen.title')}${hasDogs ? ` - ${dogPenNumber} ${dogPenNumber === 1 ? 'dog' : 'dogs'}` : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <img 
        className="dogPenNavButton__icon" 
        src='/images/dogPen.png' 
        alt="" 
        aria-hidden="true"
        loading="lazy"
      />
      <span className="dogPenNavButton__title">{t('dogpen.title')}</span>
      {hasDogs && (
        <span 
          className="dogPenNavButton__badge"
          aria-label={`${dogPenNumber} selected`}
        >
          {dogPenNumber}
        </span>
      )}
    </Link>
  );
}
