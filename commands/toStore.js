var fs = require('fs')
var complete = require('./complete')




const toStore = {
  addList: function(list) {
    console.log('Storage Exists!')
  },
  createList: function(list) {
    list = JSON.stringify(list)
    fs.writeFile('/Users/debrenamcewen/guild/todoCallback/allTasks.json', list, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
}


module.exports = {toStore}
