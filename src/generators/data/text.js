const debug = require('debug')('src:generators:data:text')
const _ = require('lodash')
const chance = require('chance').Chance()
const config = require('../../../config')

/*
 * Generate map of random words
 */
const mapSize = config.generators.data.text.pool.size
debug(`Generating map with ${mapSize} random words`)
const map = chance.unique(chance.word, mapSize)
const mapBounds = {
  min: 0,
  max: map.length - 1,
}
debug(`Created map with ${map.length} unique words and ${map.reduce((a, i) => a + i.length, 0)} characters in total`)

/*
 * Returns functions to get random text from shared random textmap
 */
const Text = function (min, max) {
  this.mapping = _.range(chance.integer({ min, max })).map((_) => chance.integer(mapBounds))
}
Text.prototype.get = function () {
  return this.mapping.map((v) => map[v]).join(' ')
}

module.exports = {
  Text,
}
