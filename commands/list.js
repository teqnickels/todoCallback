require('console.table');

function list() {
  try {
    const storage = require('../allTasks.json')
    // you can make these a const
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
  } catch(err) {

    // use dont neeed an if statement here, we already know its an error
    if(err) {
      console.log('There are no tasks to list')
    }
  }
}

// Dont put extra spaces were you don't need them
module.exports = list
