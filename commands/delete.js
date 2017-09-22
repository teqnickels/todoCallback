#!/user/bin/env node
const toStore = require('./toStore')
const fs = require('fs')


function deleteTask(task) {
  try {
    const storage = require('../allTasks.json')
    if(storage.length == 0) {
      console.log("Nothing to delete in storage")
      return
    }
    for (var i = 0; i < storage.length; i++) {
      if (storage[i].id == task) {
        var deleteObj = storage
        deleteObj.splice(i, 1)
        var update = JSON.stringify(deleteObj)
        fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', update, (err) => {
          if (err) throw (err)
        })
        console.log(`Task ${task} has been deleted`)
        console.log(`You have ${storage.length++} tasks`)
      }
    }
  } catch (err) {
    if (err)  {
      console.log("Nothing to delete in storage")
      return (err)
    } 
  }
}

module.exports = deleteTask

