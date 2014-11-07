var jshint = require('gulp-jshint')
var gulp = require('gulp')

module.exports = function (config) {
  gulp.task('lint', function () {
    return gulp.src(config.lint.source)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
  })
}