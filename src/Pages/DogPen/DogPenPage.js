import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DogCardTemplateList } from '../../Components/index';
import { getDogData, getDogResultsDogPen } from '../../Redux/selectors/dog';
import './DogPenPage.styles.scss';

function DogPenPage() {
  const { t } = useTranslation();
  const selectedDogs = useSelector(getDogResultsDogPen());
  const dogData = useSelector(getDogData());
  const data = useState(dogData);
  const [combinedDogData, setCombinedDogData] = useState([]);

  useEffect(() => {
    const combined = () => {
      const combinedList = selectedDogs.map((i) => data[0][i]);
      setCombinedDogData(combinedList);
    };
    combined();
  }, [setCombinedDogData]);

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
