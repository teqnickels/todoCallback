#!/user/bin/env node
const toStore = require('./toStore')
const storage = require('../allTasks.json')

function add(taskName) {
  var toDoList = {}
  var id = storage.length + 1

  toDoList['id'] = id
  toDoList['task'] = taskName
  toDoList['complete'] = false
  toStore(toDoList)
}

module.exports = add
