var vinylSourceStream = require('vinyl-source-stream')
var livereload = require('gulp-livereload')

module.exports = function (gulp, config) {
  console.log('test')
  var bundleHelper = function (bundler) {
    console.log('test2')
    bundler.add(config.browserify.source)

    // TODO: Make below code work! Try upgrading minifyify later on.
    // bundler.plugin('minifyify', {map: 'bundle.map.json', output: 'bundle.map.json'});

    var makeBundle = function () {
      bundler
        .bundle()
        .pipe(vinylSourceStream(config.browserify.dest.filename))
        .pipe(gulp.dest(config.browserify.dest.path))
        .pipe(livereload({auto: false}))
    }

    return makeBundle
  }

  return bundleHelper
}
