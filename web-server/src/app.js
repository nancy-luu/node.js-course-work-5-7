const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
// console.log(path.join(__dirname, '../public/about.html'))


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

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
