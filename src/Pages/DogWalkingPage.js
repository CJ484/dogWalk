import React from "react";
import "./DogResults/DogResults.scss"
import { useSelector } from "react-redux";
import Banner from "../Components/Banner/Banner";
import FilterResults from "../Components/FilterResults/FilterResults.js";
import DisplayFilters from "../Components/DisplayFilters/DisplayFilters";
import DogResults from "../Components/DogResults/DogResults";
import PaginationFunction from "../Components/Pagination/Pagination.js"
const DogWalkingPage = () => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className="test">
      <Banner />

      <div style={{ display: "flex", alignItems: "center" }}>
        <FilterResults />

        <div style={{ marginLeft: "auto" }}>
          <DisplayFilters />
        </div>
      </div>

      <div>
        <DogResults dogs={dogs} />
      </div>
      <div>
        <PaginationFunction />
      </div>
    </div>
  );
};

export default DogWalkingPage;
