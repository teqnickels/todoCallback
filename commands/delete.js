#!/user/bin/env node
const toStore = require( './toStore' )
const storage = require( '../allTasks.json' )
const fs = require('fs')


function deleteTask( task ) {
  for ( var i = 0; i < storage.length-1; i++ ) {
    if( storage[i].id == task ) {
      var deleteObj = storage
      // console.log("storage", storage)
      // console.log("deleteObj", deleteObj)


      console.log('The matching index ====>', storage[i])
      deleteObj.splice( i, 1 )

      //this is where we go wrong
      console.log('after the splice ====>',deleteObj)
      var update = JSON.stringify( deleteObj )



      console.log('new object stringified ===>',update)
      fs.writeFile( './allTasks.json', update )
      console.log(`You have ${storage.length++} tasks`)
    }
  }
}

module.exports = deleteTask
//[{"id":1,"task":"one","complete":false},{"id":2,"task":"two","complete":false},{"id":3,"task":"three","complete":false},{"id":4,"task":"four","complete":false}]