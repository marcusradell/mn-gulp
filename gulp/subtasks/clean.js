var del = require('del')
var gulp = require('gulp')

module.exports = function(config){
gulp.task('clean', function (callback) {
  del([config.clean], callback)
})
}