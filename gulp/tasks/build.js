var runSequence = require('run-sequence')

module.exports = function (gulp, config) {
  gulp.task('build', function (callback) {
    runSequence('clean', ['browserify', 'less', 'html', 'moveLocalization', 'moveCss'], callback)
  })
}
