#!/user/bin/env node
const toStore = require('./toStore')
const storage = require('../allTasks.json')
const fs = require('fs')


function deleteTask(task) {
  for (var i = 0; i < storage.length - 1; i++) {
    if (storage[i].id == task) {
      var deleteObj = storage
      deleteObj.splice(i, 1)
      var update = JSON.stringify(deleteObj)
      fs.writeFileSync('/Users/debrenamcewen/guild/study/commandLineTodo/allTasks.json', update)
      console.log(`Task ${task} has been deleted`)
      console.log(`You have ${storage.length++} tasks`)
    }
  }
}

module.exports = deleteTask