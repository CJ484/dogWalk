/* eslint-disable camelcase */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './DogCardTemplateList.styles.scss';
import DogPenAddButton from '../DogPenAddButton';

interface DogData {
  name: string;
  nameDog: string;
  trainability: number;
  image_link: string;
}

interface DogCardTemplateListProps {
  combinedDogData: DogData[];
}

function DogCardTemplateList({ combinedDogData }: DogCardTemplateListProps) {
  const { t } = useTranslation();
  return (
    <div className="cardGrid">
      {combinedDogData.map((data, index) => {
        const {
          name, nameDog, trainability, image_link,
        } = data;
        const key = `${index}${name}+${nameDog}`;
        return (
          <div key={key} className="Card">
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

export default DogCardTemplateList;
