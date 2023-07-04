import React from "react";
import "./DogResultsPage.scss";
import Banner from "../../Components/Banner/Banner";
import FilterResults from "../../Components/FilterResults/FilterResults.js";
import DisplayFilters from "../../Components/DisplayFilters/DisplayFilters";
import CreateDogList from "../../Components/CreateDog/CreateDogList";

const DogResultsPage = () => {

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
};

export default DogResultsPage;
