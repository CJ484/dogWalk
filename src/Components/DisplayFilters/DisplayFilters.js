import React, { useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import './DisplayFilters.styles.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { setFilter, removeSelected } from '../../Redux/Dog/DogResultsRedux';
import getFilterList from '../../const/selectors/DisplayFilters';

function DisplayFilters() {
  const dispatch = useDispatch();
  const selectedFilters = getFilterList();
  const [filterNames, setFilterNames] = useState([]);

  const removeSelectedFilter = (input, name) => {
    const noValue = 0;
    dispatch(setFilter({ key: name, noValue }));
    dispatch(removeSelected(input));
  };

  useEffect(() => {
    setFilterNames(selectedFilters);
  }, [dispatch, filterNames, setFilterNames, selectedFilters]);

  if (isEqual(selectedFilters.length, 0)) {
    return <div />;
  }
  return (
    <div className="displayFilters">
      {filterNames.map((name) => (
        <div key={name} className="selectedFilters">
          <FontAwesomeIcon className="fa-lg" icon={faCircleXmark} onClick={() => removeSelectedFilter(name)} />
          <h6>{name}</h6>
        </div>
      ))}
    </div>
  );
}

export default DisplayFilters;
