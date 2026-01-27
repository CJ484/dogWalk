import React from 'react';
import { isEqual } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import dogPen from '../../assets/dogPen.png';
import { getDogResultsDogPen } from '../../Redux/selectors/dog';
import { RootState } from '../../Redux/MiddleWare/index';

function DogPenNavButton() {
  const { t } = useTranslation();
  const dogPenNumber = useSelector((state: RootState) => getDogResultsDogPen()(state)).length;
  
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
