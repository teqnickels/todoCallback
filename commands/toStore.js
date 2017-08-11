const storage = require('../allTasks.json')
var fs = require('fs')

function toStore( obj ) {
    if (storage.length > 0 ) {
      storage.push(obj)
      var data = JSON.stringify(storage)
      fs.writeFileSync( './allTasks.json', data )
    } else {
      var arrOfObj = []
      arrOfObj.push(obj)
      var data = JSON.stringify(arrOfObj)
      fs.writeFileSync( './allTasks.json', data )
      }

}

module.exports = toStore
