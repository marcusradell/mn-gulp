var path = require("path")
var changeCase = require("change-case")

var moduleName = path.basename(changeCase.camel(path.basename(__dirname)))

var dependencies = []

module.exports = angular.module(moduleName, dependencies)
  .constant(moduleName + 'Constants', require('./constants'))
