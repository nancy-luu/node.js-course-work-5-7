// const fs = require('fs')
// // fs.writeFileSync('notes.txt', 'My name is Nancy.')
// fs.appendFileSync('notes.txt', ' I am a Software Engineer.')
// const lastName = require('./utils.js')
// console.log(lastName)

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')

const printNote = getNotes()
console.log(printNote);

console.log(validator.isEmail('example.com'));
console.log(validator.isURL('https://mead.io'));

console.log(chalk.bold.green.inverse('Succcess!'));
console.log(chalk.bold.red.inverse('Error!'));