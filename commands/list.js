const storage = require('../allTasks.json')
require('console.table');

function list() {
  var todoArr = []
  var finalArr = []
  for (var i = 0; i < storage.length; i++) {
    var keys = Object.keys(storage[i])
    if (storage[i].complete == false) {
      var todos = storage[i].task
      todoArr.push(todos)
    }
  }
  todoArr.forEach(function (element, index) {
    var todoObj = {}
    todoObj.id = index + 1
    todoObj.description = element
    finalArr.push( todoObj )
  })
  console.table(finalArr)
  console.log(`You have ${ todoArr.length } tasks`);
}





module.exports = list
