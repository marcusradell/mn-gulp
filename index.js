var defaultConfig = require('./gulp/config')
var _ = require('lodash')

module.exports = function (gulp, config) {
  var mergedConfig = _.assign(defaultConfig, config)
  require('./gulp')(gulp, mergedConfig)
}
