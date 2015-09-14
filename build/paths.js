var webroot = './src/AureliaTs.Web/wwwroot/';

module.exports = {
	root: './',
	wwwroot: webroot,

	source: {
		js: webroot + 'app/**/*.ts',
		css: webroot + 'content/styles/main.scss',
		html: webroot + 'app/**/*.html'
	},

	build: {
		js: webroot + 'js/',
		css: webroot + 'content/styles/',
		html: webroot + 'js/'
	},

	typings: {
		aurelia: webroot + 'jspm_packages/github/aurelia/**/*.ts',
		tsd: './typings/**/*.ts'
	},

	tests: {
		unit: {
			js: 'test/unit/**/*.js'
		}
	}
};
