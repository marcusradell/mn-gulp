'use strict';

var config = require('./../config');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('moveLocalization', function () {
  return gulp.src(config.localization.source)
    .pipe(gulp.dest(config.localization.dest))
    .pipe(livereload({auto: false}));
});
