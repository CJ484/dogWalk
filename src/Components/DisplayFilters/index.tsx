import React, { useEffect, useState } from 'react';
import { isEqual } from 'lodash';
import './DisplayFilters.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FaCircleXmark } from 'react-icons/fa6';
import { setFilter, removeSelected } from '../../Redux/dog/index';
import { getActiveFilterList } from '../../Redux/selectors/dog';
import { RootState } from '../../Redux/MiddleWare/index';

function DisplayFilters() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state: RootState) => getActiveFilterList()(state));
  const [filterNames, setFilterNames] = useState<string[]>([]);

  const removeSelectedFilter = (input: string) => {
    const noValue = 0;
    dispatch(setFilter({ key: input, value: noValue }));
    dispatch(removeSelected(input));
  };

  useEffect(() => {
    setFilterNames(selectedFilters);
  }, [selectedFilters]);

  if (isEqual(selectedFilters.length, 0)) {
    return <div />;
  }
  return (
    <div className="displayFilters">
      {filterNames.map((name) => (
        <div key={name} className="selectedFilters">
          <FaCircleXmark className="fa-lg" onClick={() => removeSelectedFilter(name)} />
          <h6>{name}</h6>
        </div>
      ))}
    </div>
  );
}

export default DisplayFilters;
