import React from "react";
import "./DogResults/DogResultsPage.scss";
import { useSelector } from "react-redux";
import Banner from "../Components/Banner/Banner";
import FilterResults from "../Components/FilterResults/FilterResults.js";
import DisplayFilters from "../Components/DisplayFilters/DisplayFilters";
import DogResults from "../Components/DogResults/DogResults";
import PaginationFunction from "../Components/Pagination/Pagination.js";

const DogWalkingPage = () => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className="test">
      <Banner />

      <div className="midSection">
        <FilterResults />
        <div className="twoComponents">
          <DisplayFilters />
          <DogResults />
        </div>
      </div>
      <PaginationFunction />
    </div>
  );
};

export default DogWalkingPage;
