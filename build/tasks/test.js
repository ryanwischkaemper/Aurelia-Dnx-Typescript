var gulp = require('gulp'),
  paths = require('../paths'),
  config = require('../config'),
  isRelease = require('../args').isRelease,
  KarmaServer = require('karma').Server,
  karmaOptions = require('../config').karmaConfig;


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  var server = new KarmaServer(karmaOptions, function (exitCode, err) {
    done()
  });
  server.start();

});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karmaOptions.singleRun = false;
  var server = new KarmaServer(karmaOptions, function (exitCode, err) {
    done()
  });
  server.start();
});