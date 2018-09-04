'use strict'
const debug = require('debug')('test:index')
const mlog = require('mocha-logger')
const chai = require('chai')
const expect = chai.expect

const startMem = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100

describe('Statistics Start', () => {
  it('Memory Usage', () => {
    mlog.log(`${startMem} MB`)
  })
})

describe('Testing Units', () => {
  require('./units')
})

describe('Statistics End', () => {
  it('Memory Usage', () => {
    const endMem = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100
    mlog.log(`${endMem} MB`)
    expect(startMem * 2).to.be.above(endMem)
  })
})
