const debug = require('debug')('test:units:generators:data:text')
const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect

const { Text } = require('../../../../src/generators/data')

// Create simple generated text bewtween 3 and 6 words
it('TEXT - Simple Generator', () => {
  const res = new Text(3,6)
  expect(res).to.be.have.property('mapping')
  expect(res.get()).to.be.an('string')
  expect(res.get().split(' ').length).to.be.within(3, 6)
})
