const debug = require('debug')('src:generators:data:index')

module.exports = {
  ...require('./ident'),
  ...require('./text'),
}
