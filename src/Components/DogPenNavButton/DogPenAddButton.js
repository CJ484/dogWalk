import React from 'react';
import { isEqual } from 'lodash';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import dogPen from '../../assets/dogPen.png';

function DogPenNavButton() {
  const { t } = useTranslation();
  const dogPenNumber = useSelector(
    (state) => state.reducer.dogResults.dogPen.length,
  );
  if (isEqual(dogPenNumber, 0)) {
    return (
      <div className="button">
        <img className="icon" src={dogPen} alt="dogpen" />
        <h3>{t('dogpen.title')}</h3>
      </div>
    );
  }
  return (
    <div className="button">
      <img className="icon" src={dogPen} alt="dogpen" />
      <h3>{t('dogpen.title')}</h3>
      <h6>{dogPenNumber}</h6>
    </div>
  );
}

export default DogPenNavButton;
