module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended'
	],
	'settings': {
		'react': {
			'pragma': 'React',
			'version': 'detect'
		}
	},
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		},
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/no-var-requires': 0,
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
	'ignorePatterns': ['/build/*.js'],
};
