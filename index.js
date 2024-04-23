// const WeatherClient = require('./weatherClient');
// const Weather = require('./weather');

const PollutionClient = require('./pollutionClient');
const Pollution = require('./pollution')

// const weatherClient = new WeatherClient();
const pollutionClient = new PollutionClient();

// client.fetchWeatherData('London').then((weatherData) => {
//     console.log(`Weather data for ${weatherData.name}:`)
//     console.log(weatherData);
// });

// weather
// const weather = new Weather(weatherClient);

// weather.load('Bristol').then(() => {
//     console.log(weather.getWeatherData());
// });

// pollution
const pollution = new Pollution(pollutionClient);

pollution.load().then(() => {
    console.log(pollution.getPollutionData());
});