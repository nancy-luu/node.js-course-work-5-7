const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)

// fs.writeFileSync('1-json.json', bookJSON)

// Got binary data, 
// converted data to standard string 
// then parses that JSON intodata into an object
// then accessed a property from it
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// const nancy = {
//     name: "Nancy",
//     planet: "Earth",
//     age: 29
// }

// const nancyJSON = JSON.stringify(nancy)
// const parsedNancy = JSON.parse(nancyJSON)
// console.log(parsedNancy)

// fs.writeFileSync('1-json.json', nancyJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Luu'
user.age = 29

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)