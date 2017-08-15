#!/user/bin/env node
const toStore = require('./toStore')
const storage = require('../allTasks.json')

function add(taskName) {
  var toDoList = {}
  var id = storage.length + 1
  toDoList[id] = taskName
  toStore(toDoList)
}

module.exports = add
