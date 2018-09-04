const debug = require('debug')('test:units:generators:data:ident')
const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect

const { Ean } = require('../../../../src/generators/data')

// Test if simple created ean matches EAN Regex conditions
it('EAN - Simple Generator', () => {
  const res = new Ean
  expect(res).to.be.have.property('mapping')
  expect(res.get()).to.match(/^(\d{13})?$/)
})

// Creates 200 EAN and check if all are new unique ones
it('EAN - Masscreate Generator Unique', () => {
  const save = _.range(200).map(_ => new Ean)
  const output = save.map(v => v.get())
  expect(_.uniq(output).length).to.equal(output.length)
})

// Creates 200 EAN with argument false, this will use existing EANs from pool
it('EAN - Masscreate Generator Reuse', () => {
  const save = _.range(200).map(_ => new Ean(false))
  const output = save.map(v => v.get())
  expect(_.uniq(output).length).to.not.equal(output.length)
})
