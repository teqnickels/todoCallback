#!/user/bin/env node
const command = process.argv[ 2 ]
const taskName = process.argv[ 3 ]
const taskDescription = process.argv.slice([ 4 ]).join().replace(/\,/g, ' ')
const add = require('./commands/add')


function commands ( command ) {
  switch (command) {
  case 'add':
    add( taskName, taskDescription)
    break;

  case 'list':
    list()
    break;

  default:
    console.log('Invalid Entry');
  }
}


commands(command)
