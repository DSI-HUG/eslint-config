const { namingConventions } = require('./utils');

import recommended from './recommended.js';

/** @type { import('eslint').Linter.FlatConfig } */
export default {
    ...recommended,
    rules: {
        // Require explicit accessibility modifiers on class properties and methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "no-public",
                    "accessors": "explicit",
                    "parameterProperties": "explicit"
                }
            }
        ],

        // Enforce naming conventions for everything across a codebase
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        "@typescript-eslint/naming-convention": [
            "error",
            ...namingConventions([{
                "selector": "default",
                "format": ["strictCamelCase"],
                "leadingUnderscore": "allow",
            }, {
                "selector": "property",
                "format": ["strictCamelCase", "UPPER_CASE"],
                "leadingUnderscore": "allow"
            }, {
                "selector": "variable",
                "format": ["strictCamelCase", "UPPER_CASE"],
                "types": ["boolean", "string", "number", "array"],
                "leadingUnderscore": "allow"
            }])
        ]
    }
};
