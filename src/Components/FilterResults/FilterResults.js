import React, { useEffect, useState } from "react";
import "./FilterResults.styles.scss";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { createList } from "../../Redux/Filters/DisplayFilterRedux";
import { setFilter } from "../../Redux/Filters/FilterRedux";

const FilterComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filterNames, setFilterNames] = useState([]);

  useEffect(() => {
    dispatch(createList(filterNames));
  }, [dispatch, filterNames]);

  const handleResultSelection = (result, name, value) => {
    const updatedResults = filterNames.includes(result)
      ? filterNames.filter((selectedResult) => selectedResult !== result)
      : [...filterNames, result];
    dispatch(setFilter(name, value));
    setFilterNames(updatedResults);
  };

  const handleCheckboxChange = (event, result) => {
    const {name, value} = event.target
    if (event.target.checked) {
      handleResultSelection(result, name, value);
    } else {
      const updatedResults = filterNames.filter(
        (selectedResult) => selectedResult !== result
      );
      setFilterNames(updatedResults);
    }
    dispatch(setFilter({key: name, value}));
  };

  return (
    <div className="filterSection">
      <Form className="filter-component">
        <h5>
          <b>{t("filters.title")}</b>
        </h5>
        <Form.Check
          type="checkbox"
          id="A"
          name="trainability"
          value="5"
          label={t("filters.option-1")}
          checked={filterNames.includes(t("filters.option-1"))}
          onChange={(e) => handleCheckboxChange(e, t("filters.option-1"))}
        />
        <Form.Check
          type="checkbox"
          id="B"
          name="shedding"
          value="5"
          label={t("filters.option-2")}
          checked={filterNames.includes(t("filters.option-2"))}
          onChange={(e) => handleCheckboxChange(e, t("filters.option-2"))}
        />
        <Form.Check
          type="checkbox"
          id="C"
          name="goodWithChildren"
          value="5"
          label={t("filters.option-3")}
          checked={filterNames.includes(t("filters.option-3"))}
          onChange={(e) => handleCheckboxChange(e, t("filters.option-3"))}
        />
        <Form.Check
          type="checkbox"
          id="D"
          name="barking"
          value={5}
          label={t("filters.option-4")}
          checked={filterNames.includes(t("filters.option-4"))}
          onChange={(e) => handleCheckboxChange(e, t("filters.option-4"))}
        />
      </Form>
    </div>
  );
};

export default FilterComponent;
