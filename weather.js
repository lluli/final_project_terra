class Weather {

    constructor(weatherClient) {
      this.weatherClient = weatherClient;
      this.currentWeatherData = null;
    }
  
    load(city) {
      return this.weatherClient.fetchWeatherData(city)
      .then(weatherData => {
        return this.currentWeatherData = weatherData;
      })
  
    }
    getWeatherData() {
      return this.currentWeatherData
    }
  }

  module.exports = Weather

  