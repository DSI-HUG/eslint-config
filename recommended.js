'use strict';

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parserOptions": {
                "project": "tsconfig.json",
                "createDefaultProgram": true
            },
            "extends": [
                "plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates",
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                require.resolve("./rules/es6"),
                require.resolve("./rules/typescript"),
                require.resolve("./rules/angular"),
                require.resolve("./rules/rxjs"),
                require.resolve("./rules/extras")
            ]
        },
        {
            "files": [
                "*.html"
            ],
            "extends": [
                "plugin:@angular-eslint/template/recommended",
                require.resolve("./rules/angular-template")
            ]
        },
        {
            "files": [
                "cypress/**/*.ts"
            ],
            "parserOptions": {
                "project": "cypress/tsconfig.json"
            },
            "extends": [
                "plugin:cypress/recommended",
                "plugin:chai-friendly/recommended",
                require.resolve("./rules/cypress")
            ]
        }
    ]
};
