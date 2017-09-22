// if you know it won't change make the 'var' a 'const'
var chai = require('chai');
import { expect } from 'chai'
import chaiChange from 'chai-change'
import allTasks from './allTasks.json'
import tasks from './tasks.js'
import add from './commands/add.js'
import complete from './commands/complete.js'
import deleteTask from './commands/delete.js'
import list from './commands/list.js'


chai.use(chaiChange);

// I like how you wrote out your test all nice and neat.
// I like how you used the tools that you know to get the job done
// But mocha has built in ways to get async jobs done.
describe('tasks', () => {
  'use strict'

  it('exists', () => {
    expect( { tasks } ).to.be.a('object')
  })

  context( 'add()', () => {
    it( 'add a task object to allTasks',() => {
      add('test1')
      setTimeout( function() {
          expect( allTasks.length ).to.equal( 1 );
      }, 100 );
    })
  })

  context('complete()', () => {
    it('sets a tasks complete property to true',() => {
      complete(1)
      expect(allTasks[0].complete).to.equal(true)
    })
  })

  context('deleteTask()', () => {
    it('removes a task from the allTasks.json', () => {
      deleteTask(1)
      setTimeout(function() {
        expect(allTasks.length).to.equal(0)
      }, 100)
    })
  })
})
