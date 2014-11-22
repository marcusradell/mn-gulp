var jshint = require('gulp-jshint')

module.exports = function (gulp, config) {
  gulp.task('lint', function () {
    return gulp.src(config.lint.source)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
  })
}
