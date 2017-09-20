#!/user/bin/env node
const toStore = require( './toStore' )
const storage = require( '../allTasks.json' )
const fs = require('fs')


function deleteTask( task ) {
  for ( var i = 0; i < storage.length-1; i++ ) {
    if( storage[i].id == task ) {
      var deleteObj = storage
      deleteObj.splice( i, 1 )
      var update = JSON.stringify( deleteObj )
      fs.writeFile( './allTasks.json', update )
      console.log(`You have ${storage.length++} tasks`)
    }
  }
}

module.exports = deleteTask
//[{"id":1,"task":"one","complete":false},{"id":2,"task":"two","complete":false},{"id":3,"task":"three","complete":false},{"id":4,"task":"four","complete":false}]