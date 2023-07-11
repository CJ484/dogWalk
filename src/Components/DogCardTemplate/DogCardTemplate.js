import { useTranslation } from "react-i18next";
import "./DogCardTemplate.styles.scss";
import DogPenAddButton from "../DogPenAddButton/DogPenAddButton";

const CardTemplate = ({ combinedDogData }) => {
  const { t } = useTranslation();

  return (
    <div className="cardGrid">
      {combinedDogData.map((value, index) => (
        <div key={index} className="Card">
          <div className="col-md-4">
            <div className="card">
              <img src={value.image_link} className="card-img-top" alt="Dog" />
              <div className="card-body">
                <h6 className="label">{t("card.name")}:</h6>
                <h5 className="card-title">{value.nameDog}</h5>
                <h6 className="label">{t("card.handling")}:</h6>
                <h5 className="card-title">{value.trainability}</h5>
                <h6 className="label">{t("card.breed")}:</h6>
                <h5 className="card-title">{value.name}</h5>
                <DogPenAddButton index={index}/>
              </div> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTemplate;
