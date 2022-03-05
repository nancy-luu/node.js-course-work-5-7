const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bc4b2f778a340e20f3c280094bf0b198&query=37.8267,-122.4233'


request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

