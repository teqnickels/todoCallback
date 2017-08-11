#!/user/bin/env node
const toStore = require('./toStore')

function add(taskName, taskDescription) {
  var toDoList = {}
  toDoList[taskName] = taskDescription
  toStore(toDoList)
}

module.exports = add
