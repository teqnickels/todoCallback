#!/user/bin/env node
const {toStore} = require('./toStore')

// fs won't be reassigned use a const please.
var fs = require('fs')

// Nice I like the seperation of concerns
// By splitting up the functionality into 2 functions.
// That promotes readabilty
function add(taskName) {
  var toDoList = []
  var task = {}

  // task['id'] = id
  task['task'] = taskName
  task['complete'] = false
  
  toDoList.push(task)
  isStorage(toDoList)
}


function isStorage(list) {
  try {
    fs.statSync('/Users/debrenamcewen/guild/todoCallback/allTasks.json').isFile();
    toStore.addList(list)
  } catch (e) {
    if (e.code === 'ENOENT') {
      toStore.createList(list)
    } else {
      throw e;
    }
  }
}


module.exports = add
