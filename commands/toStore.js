var fs = require('fs')
var complete = require('./complete')




const toStore = {
  addList: function(list) {
    var task = list.pop()
    var store = require('../allTasks.json')
    store.push(task)
    console.log(typeof(store))
    var storeString = JSON.stringify(store)
    fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', storeString, (err) => {
      if (err) throw err;
      console.log(`you have ${store.length} tasks`)
    })
  },
  createList: function(list) {
    list = JSON.stringify(list)
    fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', list, (err) => {
      if (err) throw err;
      var store = require('../allTasks.json')
      console.log(`you have ${store.length} tasks`)
    });
  }
}


module.exports = {toStore}
