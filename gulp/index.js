var requireDir = require('require-dir')

module.exports = function (config) {
  requireDir('./subtasks')(config)
  requireDir('.')(config)
}