var livereload = require('gulp-livereload')

module.exports = function (gulp, config) {
  gulp.task('moveLocalization', function () {
    return gulp.src(config.localization.source)
      .pipe(gulp.dest(config.localization.dest))
      .pipe(livereload({auto: false}))
  })
}
