#!/user/bin/env node
const toStore = require('./toStore')

function add(taskName, taskDescription) {
  console.log('task name  ->', taskName);
  console.log('task description  ->', taskDescription);

  var toDoList = {}
  toDoList[taskName] = taskDescription
  toStore(toDoList)
}

module.exports = add
