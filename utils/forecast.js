const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=bc4b2f778a340e20f3c280094bf0b198&query=37.8267,-122.4233&units=f'

// json:true automatically parses response.body
// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // in url set key value pair units = f to convert default c to f
//     console.log((response.body.current.weather_descriptions[0]) + ': It is currently ' + (response.body.current.temperature) + '° out. It feels like ' + (response.body.current.feelslike) + '° out.')
// })

// error handling with network disconnect
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log((response.body.current.weather_descriptions[0]) + ': It is currently ' + (response.body.current.temperature) + '° out. It feels like ' + (response.body.current.feelslike) + '° out.')
//     } 
// })

// 
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lon, lat, callback) => {
    const weatherURL = 'http://api.weatherstack.com/current?access_key=bc4b2f778a340e20f3c280094bf0b198&query=' +lat+ ',' +lon+ '&units=f'

    request({ url: weatherURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, (response.body.current.weather_descriptions[0]) + ': It is currently ' + (response.body.current.temperature) + '° out. It feels like ' + (response.body.current.feelslike) + '° out.')
        }
    })
}

module.exports = forecast