const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4da9339baa19ac88de79f392ebf9f3a9/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            let celciusTemp = (5/9) * (body.currently.temperature - 32)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + celciusTemp + 'C degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
