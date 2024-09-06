const { namingConventions } = require('./utils');

module.exports = {
    'extends': './recommended',
    'rules': {
        // Require explicit accessibility modifiers on class properties and methods
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                'accessibility': 'explicit',
                'overrides': {
                    'constructors': 'no-public',
                    'accessors': 'explicit',
                    'parameterProperties': 'explicit'
                }
            }
        ],

        // Enforce naming conventions for everything across a codebase
        // https://typescript-eslint.io/rules/naming-convention
        '@typescript-eslint/naming-convention': [
            'error',
            ...namingConventions([{
                'selector': 'default',
                'format': ['strictCamelCase'],
                'leadingUnderscore': 'allow'
            }, {
                'selector': 'property',
                'format': ['strictCamelCase', 'UPPER_CASE'],
                'leadingUnderscore': 'allow'
            }, {
                'selector': 'variable',
                'format': ['strictCamelCase', 'UPPER_CASE'],
                'types': ['boolean', 'string', 'number', 'array'],
                'leadingUnderscore': 'allow'
            }])
        ]
    }
};
