'use strict';

module.exports = {
	rules: {
		'jsx-require-buttons-type': require('./lib/rules/jsx-require-buttons-type')
	},
	configs: {
		recommended: {
			plugins: [
				'dvpnt'
			],
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			rules: {
				'dvpnt/jsx-require-buttons-type': 2
			}
		},
		all: {
			plugins: [
				'dvpnt'
			],
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			rules: {
				'dvpnt/jsx-require-buttons-type': 2
			}
		}
	}
};
