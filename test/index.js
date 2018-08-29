'use strict'
const debug = require('debug')('test:index')
const mlog = require('mocha-logger')

describe('Statistics Start', () => {
  it('Memory Usage', () => {
    mlog.log(`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`)
  })
})

describe('Testing Units', () => {
  require('./units')
})

describe('Statistics End', () => {
  it('Memory Usage', () => {
    mlog.log(`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`)
  })
})
