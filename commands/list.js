const storage = require('../allTasks.json')
require('console.table');

function list() {
  // newArr = []
  // newObj = {}
  // console.log(storage);
  // var keys = Object.keys(storage)
  // console.log(keys);
  // log
  // newObj.id =


  todoArr = []
  finalArr = []
  for (var i = 0; i < storage.length; i++) {
    var keys = Object.keys(storage[i])
    var todos = storage[i][keys]
    todoArr.push(todos)
  }
  todoArr.forEach(function (element, index) {
    todoObj = {}
    todoObj.id = index + 1
    todoObj.description = element
    finalArr.push( todoObj )

  })

  console.table(finalArr)
  console.log(`You have ${ todoArr.length } tasks`);
}





module.exports = list
