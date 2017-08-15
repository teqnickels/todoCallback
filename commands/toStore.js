const storage = require('../allTasks.json')
var fs = require('fs')

function toStore( obj ) {
  var arrOfObj = (storage.length == 0 ? [] : storage)
  if (obj == updateObj) {
    var update = JSON.stringify( updateObj )
    fs.writeFileSync( './allTasks.json', update )
    console.log(`You have ${storage.length++} tasks`)
  }else{
    arrOfObj.push( obj )
    var data = JSON.stringify( arrOfObj )
    fs.writeFileSync( './allTasks.json', data )
    console.log(`You have ${arrOfObj.length++} tasks`)
  }
}

module.exports = toStore
