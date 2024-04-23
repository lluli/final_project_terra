class PollutionClient {

    constructor() {
        this.apiKey = require('./apiKey');
    }

    fetchPollutionData() {
        return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london/last3days?unitGroup=us&key=${this.apiKey}&contentType=json&elements=datetime,aqius`)
            .then((response) => response.json());
    }
}

module.exports = PollutionClient;