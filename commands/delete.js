#!/user/bin/env node
const toStore = require('./toStore')
const fs = require('fs')


function deleteTask(task) {
  try {
    // Im not saying this is wrong, but I just want to know why you didn't
    // put this up top.
    const storage = require('../allTasks.json')
    if(storage.length == 0) {
      console.log("Nothing to delete in storage")
      return
    }

    // I think for readabilty I would seperate this out into its own function
    // There is alot going on here, so I think putting it in its own function
    // would help alot with the readabilty.
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

// good jobs
module.exports = deleteTask

