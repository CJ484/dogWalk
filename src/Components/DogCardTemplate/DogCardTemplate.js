/* eslint-disable camelcase */
import React, { useId } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './DogCardTemplate.styles.scss';
import DogPenAddButton from '../DogPenAddButton/DogPenAddButton';

function CardTemplate({ combinedDogData }) {
  const { t } = useTranslation();
  // eslint-disable-next-line no-console
  console.log(combinedDogData);
  return (
    <div className="cardGrid">
      {combinedDogData.map((data, index) => {
        const cardId = useId();
        const {
          name, nameDog, trainability, image_link,
        } = data;
        return (
          <div key={cardId} className="Card">
            <div className="col-md-4">
              <div className="card">
                <img src={image_link} className="card-img-top" alt="Dog" />
                <div className="card-body">
                  <h6 className="label">
                    {t('card.name')}
                    {': '}
                  </h6>
                  <h5 className="card-title">{nameDog}</h5>
                  <h6 className="label">
                    {t('card.handling')}
                    {': '}
                  </h6>
                  <h5 className="card-title">{trainability}</h5>
                  <h6 className="label">
                    {t('card.breed')}
                    {': '}
                  </h6>
                  <h5 className="card-title">{name}</h5>
                  <DogPenAddButton index={index} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

CardTemplate.propTypes = {
  combinedDogData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nameDog: PropTypes.string.isRequired,
      trainability: PropTypes.number.isRequired,
      image_link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardTemplate;
