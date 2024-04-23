// const city = "London";
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
// let weatherData = null;

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((weatherData) => {
//     console.log(weatherData);
//     console.log("Temperature:", weatherData.main.temp);
//     console.log("Weather:", weatherData.weather[0].main);
//   });

// console.log("Requesting weather data");

class WeatherClient {

  constructor (apiKey){
    this.apiKey = apiKey
  }

    fetchWeatherData(city) {
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;
      return fetch(apiUrl)
        .then(response => response.json())
        // .then(weatherData => weatherData)
    }
  }



module.exports = WeatherClient


const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed' // include our key
const client = new WeatherClient(apiKey);
const weather = new Weather(client);

// weather.load('Bristol')
//   .then(() => {
//     console.log(weather.getWeatherData());
//   })