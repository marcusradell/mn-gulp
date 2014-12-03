var livereload = require('gulp-livereload')

module.exports = function (gulp, config) {
  gulp.task('moveServer', function () {
    return gulp.src(config.server.source)
      .pipe(gulp.dest(config.server.dest))
      .pipe(livereload({auto: false}))
  })
}
