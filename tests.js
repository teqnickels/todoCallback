var chai = require('chai');
import { expect } from 'chai'
import chaiChange from 'chai-change'

import tasks from './tasks.js'

chai.use(chaiChange);

describe('tasks', () => {
  'use strict'

  it('exists', () => {
    expect( { tasks } ).to.be.a('object')
  })
})
