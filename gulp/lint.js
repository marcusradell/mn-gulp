'use strict';

var jshint = require('gulp-jshint');
var config = require('./config');
var gulp = require('gulp');

gulp.task('lint', function () {
  return gulp.src(config.lint.source)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
