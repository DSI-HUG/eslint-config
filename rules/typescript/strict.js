module.exports = {
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // Require explicit accessibility modifiers on class properties and methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "explicit",
                    "accessors": "explicit",
                    "parameterProperties": "explicit"
                }
            }
        ],

        // Enforce naming conventions for everything across a codebase
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "classProperty",
                "format": ["strictCamelCase"]
            }
        ]
    }
};
