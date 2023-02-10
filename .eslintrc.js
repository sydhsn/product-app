module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true, // Add this line!
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension
			extends: [
				'plugin:react/recommended',
				'standard-with-typescript',
				'plugin:@typescript-eslint/recommended',
				'prettier', // Add this line!
				'prettier',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					JSX: 'true',
				},
			},
		},
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: {
		'react/jsx-uses-react': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
