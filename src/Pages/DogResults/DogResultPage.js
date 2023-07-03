import React from "react";
import "./DogResultsPage.scss";
import Banner from "../../Components/Banner/Banner";
import FilterResults from "../../Components/FilterResults/FilterResults.js";
import DisplayFilters from "../../Components/DisplayFilters/DisplayFilters";
import DogCardInfo from "../../Components/CreateDog/CreateDog";
import PaginationFunction from "../../Components/Pagination/Pagination.js";

const DogResultsPage = () => {

  return (
    <div className="dogWalkingPage">
      <Banner />

      <div className="midSection">
        <FilterResults />
        <div className="twoComponents">
          <DisplayFilters />
          <DogCardInfo />
        </div>
      </div>
      <PaginationFunction />
    </div>
  );
};

export default DogResultsPage;