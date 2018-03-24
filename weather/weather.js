const request = require('request');

let getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/062e434a43473a8d08bfd5b8fd4797dc/${lat},${lng}`,
    json: true
},
    (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('cannot connect to weather server');
        }
    });

}

module.exports.getWeather = getWeather;