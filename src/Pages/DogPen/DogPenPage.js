import React, { useEffect, useState } from 'react';
import './DogPenPage.styles.scss';
import { useTranslation } from 'react-i18next';
import DogCardTemplateList from '../../Components/DogCardTemplateList/DogCardTemplateList';
import { getDogResults, getDogResultsDogPen } from '../../const/selectors/selectorDogResults';

function DogPenPage() {
  const { t } = useTranslation();
  const selectedDogs = getDogResultsDogPen();
  const dogData = getDogResults();
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
