Warning
=======
This readme is not yet in synch with the project.

mn-gulp
=======
An attempt to componentize the most used gulp tasks.

Install
=======
    npm install -g gulp (if needed)
    npm install gulp --save-dev
    npm install mn-gulp --save-dev

Quick setup
===========
Create gulpfile.js under root.
Paste in:

    var gulp = require('gulp')
    require('mn-gulp')(gulp)

Create a directory under root named 'client'.
Change to the 'client' directory.

Create a file named 'app-module.js'.
Paste in:

    require('angular')

    angular.module('app', []).controller('appController', function ($scope) {
    $scope.vm = {
      test: 'Hulk smash!'
    }

Create a file named 'index.html'.
Paste in:

    <!DOCTYPE html>
    <html ng-app="app" ng-controller="appController">
    <head lang="en">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <h1>Testing mn-gulp</h1>
    <div ng-bind="app.test"></div>
    <script src="bundle.js"></script>
    </body>
    </html>

Create a directory named 'server' with a file named 'index.js'.
Paste in the content of 'mn-gulp/sample-server/index.js' into your own server file.

Run a gulp task like 'gulp watch'.

You should now have a dist directory created under root.

Try localhost:3000 in your browser, and add an 'alert('test') to your 'client/app-module.js'-file.
Press save to see the alert in your browser window.

Usage
=====
The filenames under 'mn-gulp/gulp/tasks' are the callable gulp tasks.

The config can be copied out to your own variable, tweaked, and then sent into mn-gulp as the last parameter.
The user config does not need to be complete, and the default options will act as fallbacks.
