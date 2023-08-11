import React, { useEffect, useState } from 'react';
import './FilterResults.styles.scss';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setFilter, createList } from '../../Redux/Dog/DogResultsRedux';

function FilterComponent() {
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
    setFilterNames(updatedResults);
    dispatch(setFilter({ key: name, value }));
  };

  const handleCheckboxChange = (event, result) => {
    const { name } = event.target;
    const value = event.target.checked ? 5 : 0;
    handleResultSelection(result, name, value);
  };

  return (
    <div className="filterSection">
      <Form className="filter-component">
        <h5>
          <b>{t('filters.title')}</b>
        </h5>
        <Form.Check
          type="checkbox"
          name="trainability"
          label={t('filters.option-1')}
          onChange={(e) => handleCheckboxChange(e, t('filters.option-1'))}
        />
        <Form.Check
          type="checkbox"
          name="shedding"
          label={t('filters.option-2')}
          onChange={(e) => handleCheckboxChange(e, t('filters.option-2'))}
        />
        <Form.Check
          type="checkbox"
          name="good_with_children"
          label={t('filters.option-3')}
          onChange={(e) => handleCheckboxChange(e, t('filters.option-3'))}
        />
        <Form.Check
          type="checkbox"
          name="barking"
          label={t('filters.option-4')}
          onChange={(e) => handleCheckboxChange(e, t('filters.option-4'))}
        />
      </Form>
    </div>
  );
}

export default FilterComponent;
