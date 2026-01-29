// api.test.js
import axios from 'axios';
import apiDogCall from './index';
import urls from '@/const/urls';

// Mocking axios for testing
jest.mock('axios');

describe('apiDogCall', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make a successful API call', async () => {
    const mockedData = { mockResponse: 'data' };
    const key = process.env.REACT_APP_DOG;
    axios.get.mockResolvedValueOnce({ data: mockedData });

    const result = await apiDogCall({
      offsetAmount: 10,
      parameters: 'trainability=5',
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${urls.dogNinjaApi}?min_height=4&offset=10&trainability=5`,
      {
        headers: { 'X-Api-Key': key },
      },
    );

    expect(result).toMatchSnapshot();
  });

  it('should handle API call error', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const errorMessage = 'Not Found';
    const errorResponse = { data: errorMessage };
    axios.get.mockRejectedValueOnce(errorResponse);

    const result = await apiDogCall({ offsetAmount: 10 });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `${urls.dogNinjaApi}?min_height=4&offset=10`,
      {
        headers: { 'X-Api-Key': process.env.REACT_APP_DOG }, // Replace with your API key
      },
    );

    expect(result).toMatchSnapshot();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'could not help with that request',
    );
  });
});
