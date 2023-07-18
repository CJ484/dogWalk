import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./DogPenAddButton.styles.scss";
import { useDispatch } from "react-redux";
import { addToDogPen, removeFromDogPen } from "../../Redux/DogResults/DogResultsRedux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DogPenAddButton = ({index}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [dogPenActive, setDogPenActive] = useState(false);

    const addDogData = (input) => {
        dispatch(addToDogPen(input));
        setDogPenActive(true);
    }

    const removeDogData = (input) => {
        dispatch(removeFromDogPen(input))
        setDogPenActive(false)
    }

    if(dogPenActive === true) {
        return (
          <button className="btn btn-danger test" onClick={() => removeDogData(index)}>
            <FontAwesomeIcon icon={faTrashCan}/>
             <h6>Remove from DogPen</h6>
            {/* <FontAwesomeIcon icon={faTrashCan}/> */}
          </button>
        );
        
    } else {
        return (
          <button className="btn btn-warning" onClick={() => addDogData(index)}>
            {t("card.button")}
          </button>
        );

    }

}

export default DogPenAddButton;