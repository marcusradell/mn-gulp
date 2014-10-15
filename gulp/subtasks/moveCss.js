'use strict';

var config = require('./../config');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('moveCss', function () {
  return gulp.src(config.css.cssSource)
    .pipe(gulp.dest(config.css.dest))
    .pipe(livereload({auto: false}));
});
