const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bc4b2f778a340e20f3c280094bf0b198&query=37.8267,-122.4233&units=f'

// json:true automatically parses response.body
// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // in url set key value pair units = f to convert default c to f
//     console.log((response.body.current.weather_descriptions[0]) + ': It is currently ' + (response.body.current.temperature) + '° out. It feels like ' + (response.body.current.feelslike) + '° out.')
// })

// error handling with network disconnect
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log((response.body.current.weather_descriptions[0]) + ': It is currently ' + (response.body.current.temperature) + '° out. It feels like ' + (response.body.current.feelslike) + '° out.')
    } 
})

// Geocoding
// Address => Lat/Long => Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmx1dWFyY2giLCJhIjoiY2t3cW1zbmg5MG9hNjJuczZ3dXk1ZWp4NSJ9.bMisuCoRnMAsWfSoRzhraw&limit=1'

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1Ijoibmx1dWFyY2giLCJhIjoiY2t3cW1zbmg5MG9hNjJuczZ3dXk1ZWp4NSJ9.bMisuCoRnMAsWfSoRzhraw&limit=1'

request({ url: geocodeURL, json:true }, (error, response) => {
    const features = response.body.features
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (features.length === 0) {
        console.log('Unable to find location. Try again with different search term...')
    } else {
        console.log('lat: ' + response.body.features[0].center[1])
        console.log('long: ' + response.body.features[0].center[0])
    }
})

