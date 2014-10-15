'use strict';

var config = {
  clean: './dist',
  nodemon: {
    start: './server/server.js',
    source: './server',
    ext: 'html js'
  },
  browserify: {
    source: './client/app-module.js',
    dest: {
      filename: 'bundle.js',
      path: './dist/js'
    },
    sourceMapFileName: 'bundle.map.json'
  },
  html: {
    source: './client/**/*.html',
    dest: './dist/html'
  },
  css: {
    lessSource: './client/**/*.less',
    cssSource: './client/**/*.css',
    dest: './dist/css',
    sourcemaps: './maps'
  },
  localization: {
    source: './client/localization/**/*',
    dest: './dist/localization'
  },
  lint: {
    //TODO: Enable linting for tests when tests are stable.
    source: ['!./node_modules/**/*', '!./dist/**/*', '!./server/test/**/*', './**/*.js']
  }
};

module.exports = config;
