import React, { useState } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './DogPenAddButton.styles.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addToDogPen, removeFromDogPen } from '../../Redux/Dog/DogRedux';

function DogPenAddButton({ index }) {
  const { t } = useTranslation();
  const Dispatch = useDispatch();
  const [dogPenActive, setDogPenActive] = useState(false);

  const addDogData = (input) => {
    Dispatch(addToDogPen(input));
    setDogPenActive(true);
  };

  const removeDogData = (input) => {
    Dispatch(removeFromDogPen(input));
    setDogPenActive(false);
  };

  if (isEqual(dogPenActive, true)) {
    return (
      <button type="button" className="btn btn-danger test" onClick={() => removeDogData(index)}>
        <FontAwesomeIcon icon={faTrashCan} />
        <h6>Remove from DogPen</h6>
        {/* <FontAwesomeIcon icon={faTrashCan}/> */}
      </button>
    );
  }
  return (
    <button type="button" className="btn btn-warning" onClick={() => addDogData(index)}>
      {t('card.button')}
    </button>
  );
}

DogPenAddButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default DogPenAddButton;
