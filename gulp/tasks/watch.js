var livereload = require('gulp-livereload')
var browserify = require('browserify')
var watchify = require('watchify')
var nodemon = require('gulp-nodemon')
var gulpWatch = require('gulp-watch')
var _ = require('lodash')

require('./../subtasks/clean')
require('./../subtasks/browserify')
require('./../subtasks/less')
require('./../subtasks/html')
require('./../subtasks/moveLocalization')

module.exports = function (gulp, config) {
  gulp.task('watch', function () {
    var browserifyArgs = { debug: true }
    var bundler = watchify(browserify(_.merge(watchify.args, browserifyArgs)))

    var makeBundle = require('./../bundleHelper/index')(gulp, config)(bundler)
    bundler.on('update', makeBundle)

            // TODO: Decide what to do with the HTML pipe. Partialify or copy? Both?
    gulpWatch({glob: config.html.source}, function () {
      gulp.start('html')
    })

    gulpWatch({glob: config.localization.source}, function () {
      gulp.start('moveLocalization')
    })

    gulpWatch({glob: config.css.cssSource}, function () {
      gulp.start('moveCss')
    })

    gulpWatch({glob: config.css.lessSource}, function () {
      gulp.start('less')
    })

    nodemon({ script: config.nodemon.start, ext: config.nodemon.ext, watch: config.nodemon.source })
      .on('restart', function () {
        console.log('Server restarted!')
        //TODO: Fix the connection err refused.
        // PROTIP: Might be solvable with setTimout (fn, 5000).
        // livereload.changed()
      })

    livereload.listen()

    return makeBundle()
  })
}
