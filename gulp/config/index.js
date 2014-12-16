// TODO: Set a root path variable.

var config = {
  clean: ['./dist/**/*', './dist/.*', '!./dist/.git/**/*'],
  nodemon: {
    start: './dist/server/index.js',
    source: './server',
    ext: 'js'
  },
  server: {
    source: './server/**/*.js',
    dest: './dist/server'
  },
  browserify: {
    source: './client/index.js',
    dest: {
      filename: 'bundle.js',
      path: './dist/client'
    },
    sourceMapFileName: 'bundle.map.json'
  },
  html: {
    source: './client/index.html',
    dest: './dist/client'
  },
  css: {
    lessSource: './client/**/*.less',
    cssSource: './client/**/*.css',
    dest: './dist/client',
    sourcemaps: './maps'
  },
  copy: {
    source: ['./.gitignore', 'gulpfile.js', 'package.json', 'Procfile', 'firebase.json'],
    dest: './dist'
  },
  lint: {
    source: ['!./**/node_modules/**/*', '!./dist/**/*', './**/*.js']
  }
}

module.exports = config
