#!/user/bin/env node
const command = process.argv[ 2 ]
const taskName = process.argv.slice([ 3 ]).join().replace(/\,/g, ' ')
const add = require('./commands/add')
const list = require('./commands/list')
const complete = require('./commands/complete')


function commands ( command ) {
  switch (command) {
  case 'add':
    add( taskName  )
    break;

  case 'list':
      list();
      break;

  case 'complete':
      complete( 'complete', taskName );
      break;
  default:
    console.log('Invalid Entry');
  }
}


commands(command)
