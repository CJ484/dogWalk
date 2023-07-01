import React, { useState } from "react";
import "./FilterResults.styles.scss";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FilterComponent = ({ onFilterChange }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({ A: false, B: false, C: false });

  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.checked });
    if (onFilterChange) {
      onFilterChange({ ...filters, [event.target.name]: event.target.checked });
    }
  };

  return (
    <div className="filterSection">
      <Form className="filter-component">
        <h5>{t('filters.title')}</h5>
        <Form.Check
          type="checkbox"
          id="A"
          label={t('filters.option-1')}
          checked={filters.A}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          id="B"
          label={t('filters.option-2')}
          checked={filters.B}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          id="C"
          label={t('filters.option-3')}
          checked={filters.C}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          id="D"
          label={t('filters.option-4')}
          checked={filters.D}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default FilterComponent;
