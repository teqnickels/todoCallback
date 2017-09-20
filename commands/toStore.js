var fs = require('fs')
var complete = require('./complete')




const toStore = {
  addList: function(list) {
    console.log('Storage Exists!')
  },
  createList: function(list) {
    console.log('There is no Storage')
  }
}


module.exports = {toStore}
