module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'react/jsx-filename-extension': 'off',
		'comma-dangle': 'off',
		'arrow-parens': 'off',
		'object-curly-newline': 'off',
    'no-tabs': 'off',
    'indent': 'off',
    'quote-props': 'off',
	},
};
