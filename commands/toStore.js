const storage = require('../allTasks.json')
var fs = require('fs')

function toStore( obj ) {
  console.log('passed in --->',obj);
  var arrOfObj = (storage.length == 0 ? [] : storage)
    arrOfObj.push( obj )
    var data = JSON.stringify( arrOfObj )
  fs.writeFileSync( './allTasks.json', data )
  console.log(`You have ${arrOfObj.length++} tasks`)

}

module.exports = toStore
