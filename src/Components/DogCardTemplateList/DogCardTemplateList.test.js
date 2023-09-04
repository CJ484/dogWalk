import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/MiddleWare/Index';
import CardTemplate from './DogCardTemplateList';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockReturnValue({ t: (key) => key }),
}));

describe('CardTemplate', () => {
  test('renders the card template with correct data', () => {
    const combinedDogData = [
      {
        name: 'Bulldog',
        nameDog: 'Max',
        trainability: 5,
        image_link: 'bulldog-image-link',
      },
      {
        name: 'Labrador',
        nameDog: 'Bella',
        trainability: 5,
        image_link: 'labrador-image-link',
      },
    ];

    const component = TestRenderer.create(
      <Provider store={store}>
        <CardTemplate combinedDogData={combinedDogData} />
      </Provider>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders the card template with correct labels', () => {
    const combinedDogData = [
      {
        name: 'Bulldog',
        nameDog: 'Max',
        trainability: 5,
        image_link: 'bulldog-image-link',
      },
    ];

    const component = TestRenderer.create(
      <Provider store={store}>
        <CardTemplate combinedDogData={combinedDogData} />
      </Provider>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
