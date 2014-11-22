var fs = require('fs')
var path = require('path')
var _ = require('lodash')

var requireDir = function (name, gulp, config) {
  var dirPath = path.join(__dirname, name)

  fs.readdirSync(dirPath).forEach(function(file) {
    require(path.join(__dirname, name, file))(gulp, config)
  })
}

module.exports = function (gulp, config) {
  requireDir('subtasks', gulp, config)
  requireDir('tasks', gulp, config)
}
