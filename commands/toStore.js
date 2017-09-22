var fs = require('fs')
var complete = require('./complete')

const toStore = {
  addList: function(list) {
    var task = list.pop()
    var store = require('../allTasks.json')
    store.push(task)
    var counter = store.length
    store[store.length-1]['id'] = counter
    var storeString = JSON.stringify(store)
    fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', storeString, (err) => {
      if (err) throw err;
      console.log(`you have ${store.length} tasks`)
    })
  },
  createList: function(list) {
    list[0]['id'] = 1
    list = JSON.stringify(list)
    fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', list, (err) => {
      if (err) throw err;
      var store = require('../allTasks.json')
      console.log(`you have ${store.length} tasks`)
    })
  }
}

// dont need all the spaces.
// your only exporting one thing, so you probaly dont need to 
// export an object, unless your going to add more "stuff" to the object.
module.exports = {toStore}
