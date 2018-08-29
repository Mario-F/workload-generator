const debug = require('debug')('src:generators:data:ident')
const _ = require('lodash')
const chance = require('chance').Chance()
const RandExp = require('randexp')
const config = require('../../../config')

/*
 * Ident storage
 */
const storage = {
  ean: [],
}

/*
 * Ean ident providers
 */
// Shared Variables and Functions
const eanGenRegex = new RandExp('\\d{13}')
// Function tries to create unique Ean and return the mapping in storage
const eanGen = function() {
  let genValue = null
  do {
    genValue = eanGenRegex.gen()
  } while(!genValue || storage.ean.indexOf(genValue) !== -1)
  storage.ean.push(genValue)
  return storage.ean.indexOf(genValue)
}
_.range(config.generators.data.ident.ean.pregen).forEach(eanGen) // Pregenrate some ean (config) to provide eans on generate false

// Returns functions to get ean code, pass argument generate = false to get an existing random ean
const Ean = function(generate = true) {
  if(generate) {
    this.mapping = eanGen()
  } else {
    this.mapping = chance.integer({ min: 0, max: (storage.ean.length-1) })
  }
}
Ean.prototype.get = function() {
  return storage.ean[this.mapping]
}

module.exports = {
  Ean,
}
