var browserify = require('browserify')

module.exports = function (gulp, config) {
  gulp.task('browserify', function () {

    //TODO: Fix minification. After trying uglifyify and minifyify, the first one didn't work and the second one crashed.
    //TODO: Check if we need to externalize the source map with exorist (suggested by browserify readme) or similar.

    var bundler = browserify({debug: true})
    var makeBundle = require('./../bundleHelper')(gulp, config)(bundler)

    return makeBundle()
  })
}
