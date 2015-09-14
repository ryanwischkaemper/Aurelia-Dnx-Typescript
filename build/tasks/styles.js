var gulp = require('gulp'),
  paths = require('../paths'),
  isRelease = require('../args').isRelease,
  sourcemaps = require('gulp-sourcemaps'),
  changed = require('gulp-changed'),
  gulpIf = require('gulp-if'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso');

gulp.task('styles', function () {
  return gulp.src(paths.source.css)
    .pipe(gulpIf(!isRelease, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpIf(isRelease, csso()))
    .pipe(gulpIf(!isRelease, sourcemaps.write()))
    .pipe(gulp.dest(paths.build.css));
});