const Weather = require('./Weather')

  describe("Weather", () => {
    it("Weather", (done) => {
      const mockClient = {
        fetchWeatherData: jest.fn(), // This is a jest mock function
      };
      // Set the resolved value of the mock function.
      // We use `mockResolvedValue` and not `mockReturnValue` because this
      // is mocking an asynchronous method, which returns a promise.
      mockClient.fetchWeatherData.mockResolvedValueOnce('weatherDict');
    
      const weather = new Weather(mockClient);
      weather.load('city')
      .then (() => {
        expect(weather.getWeatherData()).toEqual('weatherDict');
        done();
      })
    })
})