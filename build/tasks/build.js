var gulp = require('gulp'),
  runSequence = require('run-sequence');

gulp.task('build', function (done) {
  return runSequence(
    'clean',
    ['scripts', 'styles'],
    'html',
    done
    );
});
