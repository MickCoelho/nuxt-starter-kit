module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'nuxt-starter-kit',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'nuxt-starter-kit' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		postcss: [],
		extend (config) {
			const postcssLoader = {
				loader: 'postcss-loader?sourceMap'
			}
			config.module.rules.forEach(loader => {
				if (loader.test.toString() === '/\\.styl(us)?$/') {
					loader.use.splice(-1, 0, postcssLoader)
				}
				if (loader.loader === 'vue-loader') {
					loader.query.loaders.stylus.splice(-1, 0, postcssLoader)
					loader.query.loaders.styl.splice(-1, 0, postcssLoader)
				}
			})
		},
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},
}
