// const fs = require('fs')
// // fs.writeFileSync('notes.txt', 'My name is Nancy.')
// fs.appendFileSync('notes.txt', ' I am a Software Engineer.')
// const lastName = require('./utils.js')
// console.log(lastName)

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

// const validator = require('validator')

// const printNote = getNotes()
// console.log(printNote);

// console.log(validator.isEmail('example.com'));
// console.log(validator.isURL('https://mead.io'));

// console.log(chalk.bold.green.inverse('Succcess!'));
// console.log(chalk.bold.red.inverse('Error!'));

// console.log(process.argv[2])


// const command = process.argv[2]

// console.log(process.argv)

// if ( command === 'add'){
//     console.log('Adding note!')
// } else if (command === 'remove'){
//     console.log('Removing note!')
// } else {
//     console.log('Not Valid!')
// }


const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.bold.green.inverse('Title: ' + argv.title))
        console.log(chalk.bold.green.inverse('Body: ' + argv.body))
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (){
        console.log(chalk.bold.red.inverse('Remove a note!'))
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function (){
        console.log(chalk.bold.blue.inverse('Listing notes!'))
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: function (){
        console.log(chalk.bold.cyan.inverse('Reading notes!'))
    }
})

yargs.parse()

// console.log(yargs.argv)

