const debug = require('debug')('src:generators:suppliers:products:create')
const RandExp = require('randexp')

const defaults = {
  supplier_productnumber_regex: '\\d{10,14}',
  supplier_productname_regex: '\\w{30,200}',
}
const productnumberRegexCache = {}
const productnameRegexCache = {}

module.exports = function create(options) {
  const opt = Object.assign({}, options, defaults)
  debug('Called Products Create with merged options:', opt)

  if(!productnumberRegexCache[opt.supplier_productnumber_regex]) {
    debug('supplier_productnumber_regex not found, create new:', opt.supplier_productnumber_regex)
    productnumberRegexCache[opt.supplier_productnumber_regex] = new RandExp(opt.supplier_productnumber_regex)
  }
  if(!productnameRegexCache[opt.supplier_productname_regex]) {
    debug('supplier_productnumber_regex not found, create new:', opt.supplier_productname_regex)
    productnameRegexCache[opt.supplier_productname_regex] = new RandExp(opt.supplier_productname_regex)
  }

  const result = {
    supplier_productnumber: productnumberRegexCache[opt.supplier_productnumber_regex].gen(),
    supplier_productname: productnameRegexCache[opt.supplier_productname_regex].gen(),
  }

  debug('Product created:', result)
  return result
}
