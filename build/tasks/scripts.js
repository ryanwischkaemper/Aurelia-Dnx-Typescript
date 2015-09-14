var gulp = require('gulp'),
  paths = require('../paths'),
  config = require('../config'),
  isRelease = require('../args').isRelease,
  sourcemaps = require('gulp-sourcemaps'),
  changed = require('gulp-changed'),
  gulpIf = require('gulp-if'),
  uglify = require('gulp-uglify'),
  ts = require('gulp-typescript');


var tsProject = ts.createProject(paths.root + 'tsconfig.json', {
  typescript: require('typescript'),
  declarationFiles: false,
  noExternalResolve: true,
  moduleResolution: 'node'
});

gulp.task('scripts', function () {
  var tsResult = gulp.src([paths.source.js, paths.typings.aurelia, paths.typings.tsd])
    .pipe(gulpIf(!isRelease, sourcemaps.init({ loadMaps: true })))
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(gulpIf(isRelease, uglify(config.uglifyConfig)))
    .pipe(gulpIf(!isRelease, sourcemaps.write({ includeContent: true })))
    .pipe(gulp.dest(paths.build.js));
});