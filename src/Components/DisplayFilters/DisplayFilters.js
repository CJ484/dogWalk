import React, { useEffect, useState } from 'react';
import './DisplayFilters.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { removeSelected } from '../../Redux/Filters/DisplayFilterRedux';
import { setFilter } from '../../Redux/Filters/FilterRedux';

function DisplayFilters() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.reducer.displayFilters.filterList);
  const [filterNames, setFilterNames] = useState([]);

  const removeSelectedFilter = (input, name) => {
    const noValue = 0;
    dispatch(setFilter({ key: name, noValue }));
    dispatch(removeSelected(input));
  };

  useEffect(() => {
    setFilterNames(selectedFilters);
  }, [dispatch, filterNames, setFilterNames, selectedFilters]);

  if (selectedFilters.length === 0) {
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
