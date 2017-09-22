#!/user/bin/env node
const toStore = require('./toStore')

// same thing use const.
var fs = require('fs')

function complete(filter) {
  try {
    const storage = require('../allTasks.json')

    // Use a let, you dont need i for the entire function
    // so block scope it.
    for (var i = 0; i < storage.length; i++) {
      if (storage[i].id == filter) {
        var description = storage[i].task
        storage[i].complete = true
        var updateObj = storage
      }
    }

    // This doesn't change again make it a const
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
