import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './DogPenAddButton.styles.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addToDogPen, removeFromDogPen } from '../../Redux/DogResults/DogResultsRedux';

function DogPenAddButton({ index }) {
  const T = (text) => useTranslation(text);
  const Dispatch = (action) => useDispatch(action);
  const [dogPenActive, setDogPenActive] = useState(false);

  const addDogData = (input) => {
    Dispatch(addToDogPen(input));
    setDogPenActive(true);
  };

  const removeDogData = (input) => {
    Dispatch(removeFromDogPen(input));
    setDogPenActive(false);
  };

  if (dogPenActive === true) {
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
      {T('card.button')}
    </button>
  );
}

DogPenAddButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default DogPenAddButton;
