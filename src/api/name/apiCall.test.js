// Import the function to be tested
import axios from 'axios';
import apiNameCall from './apiCall';

// Import Axios and Jest's mocking functions
jest.mock('axios');

describe('apiNameCall', () => {
  it('should fetch and return a list of first names', async () => {
    // Mock the Axios GET request with a sample response
    const mockResponse = {
      data: {
        results: [
          { name: { first: 'John' } },
          { name: { first: 'Jane' } },
          { name: { first: 'Bob' } },
          // Add more sample data if needed
        ],
      },
    };
    axios.get.mockResolvedValue(mockResponse);

    // Call the function
    const result = await apiNameCall();

    // Assertions
    expect(result).toEqual(['John', 'Jane', 'Bob']); // Check if the function returns the correct list of first names
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('results=50&nat=us&inc=name'),
    ); // Check if axios.get was called with the correct URL
  });

  it('should handle errors and log an error message', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    // Mock the Axios GET request to throw an error
    const errorMessage = 'Something Went Wrong in that Request';
    axios.get.mockRejectedValue({ data: errorMessage });

    // Call the function
    const result = await apiNameCall();

    // Assertions
    expect(result).toBeUndefined(); // Check if the function returns undefined when there's an error
    // eslint-disable-next-line no-console
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      errorMessage,
    ); // Check if the error message was logged
  });
});
