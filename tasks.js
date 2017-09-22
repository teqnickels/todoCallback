#!/user/bin/env node
const command = process.argv[2]
const taskName = process.argv.slice( [3]).join().replace(/\,/g, ' ' )
const add = require( './commands/add' )
const list = require( './commands/list' )
const complete = require( './commands/complete' )
const deleteTask = require( './commands/delete' )

// I aligned my code up so its nice and even
function commands ( command ) {
  switch ( command ) {
    case 'add':
      add( taskName  )
      break;

    case 'list':
      list();
      break;

    case 'complete':
      complete( taskName );
      break;

    case 'delete':
      deleteTask( taskName );
      break;

    default:
      console.log( 'Invalid Entry' );
  }
}

// not sure what this is for, but dont leave anything extra in you code.
//  add(stuff)

// Good job!
commands(command)
