// TODO: Set a root path variable.

var config = {
  clean: './dist',
  nodemon: {
    start: './server/index.js',
    source: './server',
    ext: 'html js'
  },
  browserify: {
    source: './client/app-module.js',
    dest: {
      filename: 'bundle.js',
      path: './dist'
    },
    sourceMapFileName: 'bundle.map.json'
  },
  html: {
    source: './client/**/*.html',
    dest: './dist'
  },
  css: {
    lessSource: './client/**/*.less',
    cssSource: './client/**/*.css',
    dest: './dist',
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
}

module.exports = config
