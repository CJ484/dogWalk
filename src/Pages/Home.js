import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../globalStyles.scss";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import cageDog from "../assets/dogInCage.jpg";
import dogHug from "../assets/huggingDog.jpg";

function Home() {
  return (
    <div className="HomePage">
      <div className="MainBanner">
        <h1>Become a dogs social mentor, Help him get the first paw out</h1>
        <div className="twoButtons">
          <button>
            <h2>Explore Neighborhood Dogs</h2>
          </button>
          <FontAwesomeIcon icon={faChevronDown} href="#FirstSection"/>
        </div>
      </div>
      <div className="FirstSection" id="FirstSection">
        <img src={dogHug} alt="nothing yet" />
        <p>
          Approximately 4.1 million shelter animals are adopted each year (2
          million dogs). About 2 million dogs are adopted each year, but what
          about the other half needing a home. Most dogs are scared to go back
          out because they didn't have the guidance. With our help we can help
          them get their energenic personality and make them presentable to
          future families.
        </p>
      </div>
      <div className="SecondSection">
        <p>
          There are so many reasons to adopt: meeting a unique pet, spending
          less, doing a good deed—but let’s talk facts. Millions of pets enter
          shelters every year. And hundreds of thousands are euthanized each
          year. We don’t tell you that to guilt you or be a downer, but that’s
          why adoption really matters to us. So we would love it if you
          considered adopting. And, since you're here, we’re guessing you are.
          Seriously, no judgment if you find a pet another way (every pet parent
          journey is different!). But we’re here to help make adoption easier,
          however we can.
        </p>
        <img src={cageDog} alt="nothing yet" />
      </div>
    </div>
  );
}

export default Home;
