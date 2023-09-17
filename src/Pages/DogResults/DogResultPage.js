import React from 'react';
import './DogResultsPage.scss';
import {
  Banner,
  FilterResults,
  DisplayFilters,
  CreateDogList,
} from '../../Components/index';

function DogResultsPage() {
  return (
    <div className="dogWalkingPage">
      <Banner />
      <div className="midSection">
        <FilterResults />
        <div className="twoComponents">
          <DisplayFilters />
          <CreateDogList />
        </div>
      </div>
    </div>
  );
}

export default DogResultsPage;
