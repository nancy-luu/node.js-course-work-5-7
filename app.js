// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'My name is Nancy.')

// fs.appendFileSync('notes.txt', ' I am a Software Engineer.')

// const lastName = require('./utils.js')

// console.log(lastName)

// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum)


const getNotes = require('./notes.js')

const printNote = getNotes()

console.log(printNote)