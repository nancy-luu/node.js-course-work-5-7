const express = require('express')

const app = express()

// .get lets us configure what the server shuold do
app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page!')
})

app.get('/about', (req, res) => {
    res.send('I am a software engineer!')
})

app.get('/weather', (req, res) => {
    res.send('Your Weather Report:')
})

// start server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

