import {
  FilterResults,
  DisplayFilters,
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
      <div className="midSection">
        <FilterResults />
        <div className="twoComponents">
          <DisplayFilters />
          <CreateDogList />
        </div>
      </div>
    </div>
  );
}

export default DogResultsPage;
