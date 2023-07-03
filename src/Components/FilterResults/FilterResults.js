import React, { useState } from "react";
import "./FilterResults.styles.scss";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setFilter } from "../../Redux/Filters/FilterRedux";

const FilterComponent = () => {
  const { t } = useTranslation();
  const filters = useState({});
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const {name, value} = event.target;
    dispatch(setFilter({key: name, value}));
  }

  return (
    <div className="filterSection">
      <Form className="filter-component">
        <h5>{t('filters.title')}</h5>
        <Form.Check
          type="checkbox"
          id="A"
          name="trainability"
          value={5}
          label={t('filters.option-1')}
          checked={filters.A}
          onChange={handleFilterChange}
        />
        <Form.Check
          type="checkbox"
          id="B"
          name="shedding"
          value={5}
          label={t('filters.option-2')}
          checked={filters.B}
          onChange={handleFilterChange}
        />
        <Form.Check
          type="checkbox"
          id="C"
          name="goodWithChildren"
          value={5}
          label={t('filters.option-3')}
          checked={filters.C}
          onChange={handleFilterChange}
        />
        <Form.Check
          type="checkbox"
          id="D"
          name="barking"
          value={5}
          label={t('filters.option-4')}
          checked={filters.D}
          onChange={handleFilterChange}
        />
      </Form>
    </div>
  );
};

export default FilterComponent;
