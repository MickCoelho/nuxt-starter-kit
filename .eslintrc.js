module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 7,
		parser: 'babel-eslint'
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/strongly-recommended'
	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {
		'vue/html-indent': ['error', 'tab'],
		"function-paren-newline": 0,
		"global-require": 0,
		"indent": [
			1,
			"tab",
			{
				"SwitchCase": 1,
				"MemberExpression": 0
			}
		],
		"max-len": 0,
		"new-cap": [
			2,
			{
				"capIsNew": false,
				"newIsCap": true
			}
		],
		"no-param-reassign": 0,
		"no-shadow": 0,
		"no-underscore-dangle": 0,
		"no-tabs": 0,
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"no-confusing-arrow": ["error", {"allowParens": true}],
		"object-curly-newline": 0,
	}
}
