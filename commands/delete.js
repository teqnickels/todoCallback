#!/user/bin/env node
const toStore = require('./toStore')
const fs = require('fs')


function deleteTask(task) {
  const storage = require('../allTasks.json')
  // console.log("THE ARG IS ===>",task)
  // console.log("ABOUT TO DELETE")
  // console.log("STORE",storage)
  for (var i = 0; i < storage.length; i++) {
    console.log("LOOP AT ---> ", i)
    // console.log("LOOP",storage[i])
    if (storage[i].id == task) {
      // console.log("FOUND A MATCH")

      var deleteObj = storage
      deleteObj.splice(i, 1)
      var update = JSON.stringify(deleteObj)
      console.log("SLICED ARRAY", update)

      fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', update, (err) => {
        if (err) throw (err)
      })
      console.log(`Task ${task} has been deleted`)
      console.log(`You have ${storage.length++} tasks`)
    }
  }
}

module.exports = deleteTask

