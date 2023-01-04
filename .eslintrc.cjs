module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
		// disallow semi-colon
		"semi": ["error", "never"],
		"quotes": ["error", "double"],
		"indent": ["error", 4, { "MemberExpression": 1 }],
		"array-element-newline": ["error", "consistent"],
		// unused params underscore
		"@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
	}
};
