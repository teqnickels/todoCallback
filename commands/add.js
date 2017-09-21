#!/user/bin/env node
const {toStore} = require('./toStore')

var fs = require('fs')

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
