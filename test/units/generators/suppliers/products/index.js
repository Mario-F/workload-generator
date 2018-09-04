const debug = require('debug')('test:units:generators:suppliers:products:index')
const chai = require('chai')
const expect = chai.expect
const products = require('../../../../../src/generators/suppliers/products')

describe('Products', () => {
  it('Test create', (done) => {
    const pd = products.createProduct()
    expect(pd.supplier_productnumber).to.be.a('string')
    done()
  })

  it('Test Masscreate', (done) => {
    const acc = []
    debug('Start Masscreate')
    let i
    for(i = 0; i < 50; i++) {
      acc.push(products.createProduct())
    }
    debug('End Masscreate')
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    done()
  })
})
