var gulp = require('gulp'),
		paths = require('../paths'),
		del = require('del'),
		vinylPaths = require('vinyl-paths');

gulp.task('clean', function () {
  var vp = vinylPaths();
  return gulp.src([paths.build.js, paths.build.css + '**/*.css'])
    .pipe(vp)
    .on('end', function () {
      del(vp.paths, { force: true });
    });
});