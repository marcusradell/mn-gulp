var gulp = require('gulp')
var livereload = require('gulp-livereload')

module.exports = function(config) {
gulp.task('moveCss', function () {
  return gulp.src(config.css.cssSource)
    .pipe(gulp.dest(config.css.dest))
    .pipe(livereload({auto: false}))
})
}
