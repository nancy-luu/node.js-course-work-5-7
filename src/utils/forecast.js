const request = require('request');

const forecast = (lon, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bc4b2f778a340e20f3c280094bf0b198&query=' +lat+ ',' +lon+ '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, (body.current.weather_descriptions[0]) + ': It is currently ' + (body.current.temperature) + '° out. It feels like ' + (body.current.feelslike) + '° out.')
        }
    })
}

module.exports = forecast