#!/user/bin/env node
const toStore = require('./toStore')
const storage = require('../allTasks.json')
var fs = require('fs')


function complete(taskName) {
  for (var i = 0; i < storage.length; i++) {
    if (storage[i].id == taskName) {
      storage[i].complete = true
      var updateObj = storage
    }
  }
  var update = JSON.stringify( updateObj )
  fs.writeFile( './allTasks.json', update )
  console.log(`You have ${storage.length++} tasks`)
}
module.exports = complete;
