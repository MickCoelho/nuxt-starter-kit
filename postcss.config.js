module.exports = {
	plugins: [
		require('postcss-cssnext')({
			warnForDuplicates: false,
			browsers: [
				'Chrome >= 28',
				'Firefox >= 28',
				'Edge >= 12',
				'Explorer >= 9',
				'Safari >= 5.1',
				'iOS >= 7',
				'Android >= 4',
				'ExplorerMobile >= 11',
				'ChromeAndroid >= 54',
				'FirefoxAndroid >= 50',
				'UCAndroid >= 11',
				'OperaMobile >= 12.1',
				'BlackBerry >= 10',
				'Samsung >= 4',
			],
		}),
		require('postcss-import')(),
		require('cssnano')({
			preset: 'default',
		}),
		require('autoprefixer')({
			browsers: ['last 2 versions'],
		}),
		require('postcss-nested')(),
		require('postcss-responsive-type')(),
		require('postcss-hexrgba')(),
		require('postcss-mixins')(),
		require('postcss-simple-vars')(),
	],
}
