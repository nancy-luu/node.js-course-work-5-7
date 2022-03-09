const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
// console.log(path.join(__dirname, '../public/about.html'))

// .get lets us configure what the server shuold do
// app.get('', (req, res) => {
//     res.send('<h1>WEATHER</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({ 
//         name: 'Nancy',
//         age: 29
//     })
//     // res.send([
//     //     {name: 'Nancy'},
//     //     {name: 'Donna'}
//     // ])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>ABOUT</h1>')
// })

// Define Paths For Express Config:
const publicDirectoryPath = path.join(__dirname, '../public')
// customizing hbs path for views 
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static Directory To Serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    // render one of our views, express is configured to use the view engine hbs 
    res.render('index', {
        title: 'Weather',
        name: 'Nancy Pantz'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me:',
        name: 'Nancy Pantz'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'To find help - follow these links:',
        title: 'Help',
        name: 'Nancy Pantz'
    })
})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address..'
        })
    }

    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
        // const {longitude, latitude, location} = data
        if (error) {
            return res.send({ error })
        }
    
        // second asynchronous operation that has access to final data
        // utilize the response back from geocode for lat and lon
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

// app.get('/products', (req, res) => {
//     if (!req.query.search ){
//         return res.send({
//             error: 'You must provide a search term',
//         })
//     }

//     console.log(req.query.search)
//     res.send({ 
//         products: []
//     })
// })

app.get('/help/*', (req, res)=> {
    res.render( 'errorpage', {
        title: '404',
        name: 'Nancy Pantz',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('errorpage', { 
        title: '404',
        name: 'Nancy Pantz',
        errorMessage: 'Page not found.'
    })
})

// start server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
