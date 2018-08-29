const debug = require('debug')('test:units:generators:data:index')
const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect

const { Ean, Text } = require('../../../../src/generators/data')

it('EAN Generator', () => {
  const res = new Ean()
  expect(res).to.be.have.property('mapping')

})

it('Ident Eangenerator Masscreate', () => {
  debug('Start massEan')
  const save = _.range(200).map(_ => new Ean)
  debug('Start massEan OUTPUT')
  const output = save.map(v => v.get())
  debug('Start massEan OUTPUT FINISH')
})

it('TEXT Generator', () => {
  const res = new Text(3,6)
  expect(res).to.be.have.property('mapping')
  expect(res.get()).to.be.an('string')
  expect(res.get().split(' ').length).to.be.within(3, 6)
})
