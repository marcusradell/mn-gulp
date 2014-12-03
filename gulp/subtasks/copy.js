var livereload = require('gulp-livereload')

module.exports = function (gulp, config) {
  gulp.task('copy', function () {
    return gulp.src(config.copy.source)
      .pipe(gulp.dest(config.copy.dest))
      .pipe(livereload({auto: false}))
  })
}
