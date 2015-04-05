var sourcemaps = require('gulp-sourcemaps')
var less = require('gulp-less')
var csso = require('gulp-csso')
var livereload = require('gulp-livereload')
var concat = require('gulp-concat')

module.exports = function(gulp, config) {
  gulp.task('less', function () {
    return gulp.src(config.css.lessSource)
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(concat('bundle.css'))
      .pipe(csso())
      .pipe(sourcemaps.write(config.css.sourcemaps))
      .pipe(gulp.dest(config.css.dest))
      .pipe(livereload({auto: false}))
  })
}
