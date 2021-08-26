const { namingConventions } = require('./utils');

module.exports = {
    "extends": "./recommended",
    "rules": {
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
                "selector": "property",
                "format": ["strictCamelCase", "UPPER_CASE"],
                "leadingUnderscore": "allow"
            }, {
                "selector": "variable",
                "modifiers": ["global"],
                "format": ["UPPER_CASE"],
                "leadingUnderscore": "allow"
            }, {
                "selector": "method",
                "format": ["strictCamelCase"],
                "leadingUnderscore": "allow"
            }])
        ]
    }
};
