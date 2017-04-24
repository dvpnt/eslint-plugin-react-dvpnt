/**
 * @fileoverview Enforce buttons elements to have type attribute
 * @author psixdev
 */

'use strict';

module.exports = {
	meta: {
		docs: {
			description: 'Enforce buttons elements to have type attribute',
			category: 'Stylistic Issues',
			recommended: true
		},
		fixable: 'code',

		schema: [{
			'enum': ['always', 'never']
		}]
	},

	create: function(context) {
		var configuration = context.options[0] || 'always';

		var ALWAYS_MESSAGE = 'Missing "type" prop for button element';

		return {
			JSXOpeningElement: function(node) {
				switch (configuration) {
					case 'always':
						if (node.name.name === 'button') {
							var withType = node.attributes.some(function(decl) {
								return decl.type === 'JSXAttribute' && decl.name.name === 'type';
							});

							if (!withType) {
								context.report({
									node: node,
									message: ALWAYS_MESSAGE
								});
							}
						}
						break;
					default:
						break;
				}

			}
		};
	}
};
