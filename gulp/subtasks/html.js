var htmlmin = require('gulp-htmlmin')
var livereload = require('gulp-livereload')

module.exports = function(gulp, config) {
  gulp.task('html', function () {
    return gulp.src(config.html.source)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.html.dest))
      .pipe(livereload({auto: false}))
  })
}
