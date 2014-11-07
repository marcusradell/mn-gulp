var defaultConfig = require('./gulp/config')
var _ = require('lodash')

module.exports = function (config) {
  var mergedConfig = _.defaults(config,  defaultConfig)
    require('./gulp')(mergedConfig)
}
