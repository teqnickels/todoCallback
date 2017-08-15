#!/user/bin/env node
const toStore = require('./toStore')
const storage = require('../allTasks.json')

function complete(taskName) {
  for (var i = 0; i < storage.length; i++) {
    if (storage[i].id == taskName) {
      storage[i].complete = true
      updateObj = storage
    }
  }
  toStore(updateObj)

}
module.exports = complete;
