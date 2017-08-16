var chai = require('chai');
import { expect } from 'chai'
import chaiChange from 'chai-change'
import allTasks from './allTasks.json'
import tasks from './tasks.js'
import add from './commands/add.js'
import complete from './commands/complete.js'

chai.use(chaiChange);

describe('tasks', () => {
  'use strict'

  it('exists', () => {
    expect( { tasks } ).to.be.a('object')
  })

  context( 'add()', () => {
    it( 'add a task object to allTasks',() => {
      add('test1')
      setTimeout( function () {
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





})
