var paths = require('./paths'),
	isRelease = require('./args').isRelease;

module.exports = {
	minifyHtmlConfig: {
		empty: true,
		spare: true,
		quotes: true
	},
	uglifyConfig: {
		mangle: true
	},
	karmaConfig: {
		configFile: __dirname + '/../karma.conf.js',
		singleRun: true,
		jspm: {
			config: stripLeadingDotSlash(paths.wwwroot) + 'config.js',
			packages: stripLeadingDotSlash(paths.wwwroot) + 'jspm_packages',
			loadFiles: [paths.tests.unit.js],
			serveFiles: [stripLeadingDotSlash(paths.build.js) + '**/*.js'],
			paths: {
				"app/*": 'base/' + stripLeadingDotSlash(paths.build.js) + '*',
				"test/*": 'base/test/*',
				"github:*": 'base/' + stripLeadingDotSlash(paths.wwwroot) + 'jspm_packages/github/*',
				"npm:*": 'base/' + stripLeadingDotSlash(paths.wwwroot) + 'jspm_packages/npm/*'
			}
		}
	}
};

function stripLeadingDotSlash(val) {
  return val.toString().replace(/\.\//, '');
}


