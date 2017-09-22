#!/user/bin/env node
const toStore = require('./toStore')
var fs = require('fs')


function complete(filter) {
  try {
    const storage = require('../allTasks.json')
    for (var i = 0; i < storage.length; i++) {
      if (storage[i].id == filter) {
        var description = storage[i].task
        storage[i].complete = true
        var updateObj = storage
      }
    }
    var update = JSON.stringify( updateObj )
    fs.writeFile( './allTasks.json', update, (err) => {
      if (err) throw (err)
      console.log(`Completed task ${filter}: ${description}`)
    })
  }catch(err) {
    if(err) {
      console.log("Nothing in storage to 'complete'" )
      return (err)
    }

  }
}
module.exports = complete;
