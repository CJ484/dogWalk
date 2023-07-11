import React, { useEffect, useState } from "react";
import './DogPenPage.styles.scss';
import { useSelector } from "react-redux";
import CardTemplate from "../../Components/DogCardTemplate/DogCardTemplate";

const DogPenPage = () => {
    const selectedDogs = useSelector((state) => state.reducer.dogResults.dogPen);
    const dogData = useSelector((state) => state.reducer.dogResults.results);
    const data = useState(dogData);
    const [combinedDogData, setCombinedDogData] = useState([]);

    
    useEffect(() => {
        const combined = () => {
            const combinedList = selectedDogs.map((i) => data[0][i]);
            
            setCombinedDogData(combinedList);
        }
        combined();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setCombinedDogData])
    
    if(selectedDogs.length === 0){
        return (
            <div className="DogPen">
                <div className="emptyDogpen">
                    <h1>The DogPen is Empty</h1>
                    <h3>Start Looking To Help A Paw in Need</h3>
                </div>
            </div>
        )
    } else {
        return(
            <div className="DogPen">
                <div className="activeDogpen">
                    <h1>Your Selected Pooch's</h1>
                    <CardTemplate combinedDogData={combinedDogData}/>
                </div>
            </div>
        )
    }

}

export default DogPenPage;