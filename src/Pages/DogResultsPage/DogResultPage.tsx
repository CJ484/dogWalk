import {
  CreateDogList,
} from '@/Components';
import { useTranslation } from 'react-i18next';
import './DogResultsPage.scss';

function DogResultsPage() {
  const { t } = useTranslation();
  return (
    <div className="dogWalkingPage">
      <div className="dogWalkingPage__banner">
        <h1>{t('banner.title')}</h1>
      </div>
      <div className="dogWalkingPage__resultsSection">
        <CreateDogList />
      </div>
    </div>
  );
}

export default DogResultsPage;
