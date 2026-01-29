import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DogCardTemplateList } from '@/Components';
import { getDogData, getDogResultsDogPen } from '@/Redux/selectors/dog';
import './DogPenPage.scss';
import { RootState } from '@/Redux/MiddleWare/index';

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

  useEffect(() => {
    const combined = () => {
      const combinedList = selectedDogs.map((i) => dogData[i]);
      setCombinedDogData(combinedList);
    };
    combined();
  }, [selectedDogs, dogData]);

  if (selectedDogs.length === 0) {
    return (
      <div className="DogPen">
        <div className="emptyDogpen">
          <h1>{t('dogpen.emptyHeader-1')}</h1>
          <h3>{t('dogpen.emptyHeader-2')}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="DogPen">
      <div className="activeDogpen">
        <h1>{t('dogpen.activeHeader-1')}</h1>
        <DogCardTemplateList combinedDogData={combinedDogData} />
      </div>
    </div>
  );
}

export default DogPenPage;
