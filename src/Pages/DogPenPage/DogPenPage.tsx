import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DogCardTemplateList } from '@/Components';
import { getDogData, getDogResultsDogPen } from '@/Redux/selectors/dog';
import { RootState } from '@/Redux/MiddleWare/index';
import './DogPenPage.scss';

interface DogData {
  name: string;
  nameDog: string;
  trainability: number;
  image_link: string;
}

function DogPenPage() {
  const { t } = useTranslation();
  const selectedDogs = useSelector((state: RootState) => getDogResultsDogPen()(state));
  const dogData = useSelector((state: RootState) => getDogData()(state));
  const [combinedDogData, setCombinedDogData] = useState<DogData[]>([]);

  // Memoize combined data to avoid unnecessary recalculations
  const combinedList = useMemo(() => {
    return selectedDogs.map((i) => dogData[i]).filter(Boolean);
  }, [selectedDogs, dogData]);

  useEffect(() => {
    setCombinedDogData(combinedList);
  }, [combinedList]);

  if (selectedDogs.length === 0) {
    return (
      <div className="page">
        <div className="emptyDogpen">
          <h1 className="emptyDogpen__title">{t('dogpen.emptyHeader-1')}</h1>
          <h3 className="emptyDogpen__subtitle">{t('dogpen.emptyHeader-2')}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="activeDogpen">
        <h1 className="activeDogpen__title">{t('dogpen.activeHeader-1')}</h1>
        {combinedDogData.length > 0 && (
          <DogCardTemplateList data={combinedDogData} />
        )}
      </div>
    </div>
  );
}

export default DogPenPage;
