import React, { useState } from 'react';
import { isEqual } from 'lodash';
import { useTranslation } from 'react-i18next';
import './DogPenAddButton.styles.scss';
import { useDispatch } from 'react-redux';
import { FaTrashCan } from 'react-icons/fa6';
import { addToDogPen, removeFromDogPen } from '../../Redux/dog/index';

interface DogPenAddButtonProps {
  index: number;
}

function DogPenAddButton({ index }: DogPenAddButtonProps) {
  const { t } = useTranslation();
  const Dispatch = useDispatch();
  const [dogPenActive, setDogPenActive] = useState(false);

  const addDogData = (input: number) => {
    Dispatch(addToDogPen(input));
    setDogPenActive(true);
  };

  const removeDogData = (input: number) => {
    Dispatch(removeFromDogPen(input));
    setDogPenActive(false);
  };

  if (isEqual(dogPenActive, true)) {
    return (
      <button type="button" className="btn btn-danger test" onClick={() => removeDogData(index)}>
        <FaTrashCan />
        <h6>Remove from DogPen</h6>
      </button>
    );
  }
  return (
    <button type="button" className="btn btn-warning" onClick={() => addDogData(index)}>
      {t('card.button')}
    </button>
  );
}

export default DogPenAddButton;
