const patchLib = require('./patch.object')
const lib = require('./lib')

module.exports = {
  ...patchLib,
  ...lib
}
