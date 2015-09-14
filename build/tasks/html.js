var gulp = require('gulp'),
  paths = require('../paths'),
  config = require('../config'),
  isRelease = require('../args').isRelease,
  changed = require('gulp-changed'),
  gulpIf = require('gulp-if'),
  minifyHtml = require('gulp-minify-html');

gulp.task('html', function () {
  return gulp.src(paths.source.html)
    .pipe(gulpIf(!isRelease, changed(paths.build.html, { extension: '.html' })))
    .pipe(gulpIf(isRelease, minifyHtml(config.minifyHtmlConfig)))
    .pipe(gulp.dest(paths.build.html));
});