import React, { useEffect, useState } from "react";
import './DogPenPage.styles.scss';
import { useSelector } from "react-redux";
import CardTemplate from "../../Components/DogCardTemplate/DogCardTemplate";
import { useTranslation } from "react-i18next";

const DogPenPage = () => {
    const { t } = useTranslation();
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
                    <h1>{t("dogpen.emptyHeader-1")}</h1>
                    <h3>{t("dogpen.emptyHeader-2")}</h3>
                </div>
            </div>
        )
    } else {
        return(
            <div className="DogPen">
                <div className="activeDogpen">
                    <h1>{t("dogpen.activeHeader-1")}</h1>
                    <CardTemplate combinedDogData={combinedDogData}/>
                </div>
            </div>
        )
    }

}

export default DogPenPage;