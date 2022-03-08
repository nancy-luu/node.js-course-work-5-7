const path = require('path')
const express = require('express')

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

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    // render one of our views, express is configured to use the view engine hbs 
    res.render('index', {
        title: 'Weather App',
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
        message: 'To find help - follow these links:'
    })
})

app.get('/weather', (req, res) => {
    res.send({ 
        forecast: '50 degrees',
        location: 'Boston'
    })
})

// start server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
