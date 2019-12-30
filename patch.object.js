const {
  toKeyValueArray,
  keys,
  values
} = require('./lib')

function patch() {
  Object.prototype.toKeyValueArray = toKeyValueArray
  Object.prototype.keys = keys
  Object.prototype.values = values
}

function depatch() {
  Object.prototype.toKeyValueArray = null
  delete Object.prototype.toKeyValueArray
  Object.prototype.keys = null
  delete Object.prototype.keys
  Object.prototype.values = null
  delete Object.prototype.values
}

module.exports = {
  patch,
  depatch
}
