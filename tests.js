var chai = require('chai');
import { expect } from 'chai'
import chaiChange from 'chai-change'
import allTasks from './allTasks.json'
import tasks from './tasks.js'
import add from './commands/add.js'

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
        try {
          expect( allTasks.length ).to.equal( 1 );
        } catch( error ) {
          done( error );
        }
      }, 100 );
    })
  })
})
