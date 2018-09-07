const debug = require('debug')('test:units:generators:data:ident')
const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect

const { Ean, genCompanyName } = require('../../../../src/generators/data')

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

// Test if generateCompanyName returns name and abbr as string
it('CompanyName - Simple Generated Name', () => {
  const company = genCompanyName()
  expect(company).to.be.have.property('name')
  expect(company.name).to.be.a('string')
  expect(company).to.be.have.property('abbr')
  expect(company.abbr).to.be.a('string')
})

// Test if generateCompanyName returns name and abbr as string
it('CompanyName - Masscreate Generated Names', () => {
  const comps = _.range(100).map(_ => genCompanyName())
  comps.forEach(v => {
    expect(v).to.be.have.property('name')
    expect(v.name).to.be.a('string')
    expect(v).to.be.have.property('abbr')
    expect(v.abbr).to.be.a('string')
  })
})
