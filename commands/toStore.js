const storage = require('../allTasks.json')
var fs = require('fs')
// var complete = require('./complete')

function toStore( obj ) {
  var arrOfObj = (storage.length == 0 ? [] : storage)
    arrOfObj.push( obj )
    var data = JSON.stringify( arrOfObj )
    fs.writeFile( './allTasks.json', data )
    console.log(`You have ${arrOfObj.length++} tasks`)
  }


module.exports = toStore
