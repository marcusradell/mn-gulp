'use strict';

var config = require('./../config');
var htmlmin = require('gulp-htmlmin');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('html', function () {
  return gulp.src(config.html.source)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.html.dest))
    .pipe(livereload({auto: false}));
});
