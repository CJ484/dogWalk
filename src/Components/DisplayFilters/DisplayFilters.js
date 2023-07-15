import "./DisplayFilters.styles.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { removeSelected } from "../../Redux/Filters/DisplayFilterRedux";
import { setFilter } from "../../Redux/Filters/FilterRedux";

const DisplayFilters = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.reducer.displayFilters.filterList);
  const [filterNames, setFilterNames] = useState([]);

  const removeSelectedFilter = (input, name) => {
    const noValue = 0;
    dispatch(setFilter({key: name, noValue}));
    dispatch(removeSelected(input));
  }

  useEffect(() => {
    setFilterNames(selectedFilters);
  }, [dispatch, filterNames, setFilterNames, selectedFilters])

  if(selectedFilters.length === 0) {
    return <div></div>
  } else {
    return (
      <div className="displayFilters">
        {filterNames.map((name, index) => (
          <div key={index} className="selectedFilters">
            <FontAwesomeIcon  className="fa-lg" icon={faCircleXmark} onClick={() => removeSelectedFilter(name)}/>
            <h6 key={name}>{name}</h6>
          </div>
        ))}
      </div>
    );
  }

};

export default DisplayFilters;
