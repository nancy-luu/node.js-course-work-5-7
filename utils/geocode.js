const request = require('request');

// Geocoding
// Address => Lat/Long => Weather

// correct url
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmx1dWFyY2giLCJhIjoiY2t3cW1zbmg5MG9hNjJuczZ3dXk1ZWp4NSJ9.bMisuCoRnMAsWfSoRzhraw&limit=1'

// error test url
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1Ijoibmx1dWFyY2giLCJhIjoiY2t3cW1zbmg5MG9hNjJuczZ3dXk1ZWp4NSJ9.bMisuCoRnMAsWfSoRzhraw&limit=1'

// request({ url: geocodeURL, json:true }, (error, response) => {
//     const features = response.body.features
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (features.length === 0) {
//         console.log('Unable to find location. Try again with different search term...')
//     } else {
//         console.log('lat: ' + response.body.features[0].center[1])
//         console.log('long: ' + response.body.features[0].center[0])
//     }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibmx1dWFyY2giLCJhIjoiY2t3cW1zbmg5MG9hNjJuczZ3dXk1ZWp4NSJ9.bMisuCoRnMAsWfSoRzhraw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
    
}

module.exports = geocode
