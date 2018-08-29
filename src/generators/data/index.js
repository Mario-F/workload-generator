const debug = require('debug')('src:generators:data:index')

const { Ean } = require('./ident')
const { Text } = require('./text')

module.exports = {
  Ean,
  Text,
}
