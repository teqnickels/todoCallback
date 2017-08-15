#!/user/bin/env node
const toStore = require( './toStore' )
const storage = require( '../allTasks.json' )
const fs = require('fs')


function deleteTask( task ) {
  for ( var i = 0; i < storage.length; i++ ) {
    if( storage[i].id == task ) {
      var deleteObj = storage
      deleteObj.splice( storage[i], 1 )
      var update = JSON.stringify( deleteObj )
      fs.writeFileSync( './allTasks.json', update )
      console.log(`You have ${storage.length++} tasks`)
    }
  }
}

module.exports = deleteTask
