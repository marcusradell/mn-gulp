var fs = require('fs')

module.exports = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('authentications')

  $stateProvider
    .state('authentications', {
      url: '/authentications',
      template: fs.readFileSync(__dirname + '/ui-views/authentications/template.html')
    })
    /* .state('group', {
      url: '/group/:mnTournamentId/:mnGroupId',
      template: fs.readFileSync(__dirname + '/ui-views/group/template.html'),
      controller: require('./ui-views/group/controller'),
      controllerAs: 'vm'
    }) */
}
