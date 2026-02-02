import { useTranslation } from 'react-i18next';
import DogPenAddButton from './DogPenAddButton/DogPenAddButton';
import './DogCardTemplate.scss';

interface DogData {
  name: string;
  nameDog: string;
  trainability: number;
  image_link: string;
}

interface DogCardTemplateProps {
  data: DogData[];
}

export default function DogCardTemplate({ data }: DogCardTemplateProps) {
  const { t } = useTranslation();
  return (
    <div className="cardGrid">
      {data.map((data, index) => {
        const {
          name, nameDog, trainability, image_link,
        } = data;
        const key = `${index}${name}+${nameDog}`;
        return (
          <div key={key} className="cardGrid__item">
            <div className="card">
              <img src={image_link} className="card__image" alt="Dog" />
              <div className="card__body">
                <h6 className="card__label">
                  {t('card.name')}
                  {': '}
                </h6>
                <h5 className="card__title">{nameDog}</h5>
                <h6 className="card__label">
                  {t('card.handling')}
                  {': '}
                </h6>
                <h5 className="card__title">{trainability}</h5>
                <h6 className="card__label">
                  {t('card.breed')}
                  {': '}
                </h6>
                <h5 className="card__title">{name}</h5>
                <DogPenAddButton index={index} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

