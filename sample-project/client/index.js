require('angular')
require('firebase')
require('angularfire')
require('angular-ui-router')

angular.module('app', [
  'firebase',
  'ui.router',
  require('./components/mn-authentication').name
])
  .config(require('./config'))
