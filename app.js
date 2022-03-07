const request = require('request')
const fs = require('fs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log('Please provide an address!')
} else {
    // first asynchronous operation
    // the response object for data has lat, lon, and location
    geocode(location, (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        // second asynchronous operation that has access to final data
        // utilize the response back from geocode for lat and lon
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
}



