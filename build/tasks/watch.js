var gulp = require('gulp'),
  paths = require('../paths');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function () {
  gulp.watch(paths.source.js, ['scripts']).on('change', reportChange);
  gulp.watch(paths.source.css, ['styles']).on('change', reportChange);
  gulp.watch(paths.source.html, ['html']).on('change', reportChange);
});
