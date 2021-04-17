'use strict';

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "ignorePatterns": [
        "projects/**/*"
    ],
    "overrides": [
        {
            "files": [
                "src/**/*.ts"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": [
                    "tsconfig.eslint.json"
                ]
            },
            "extends": [
                "plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates",
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                require.resolve("./rules/es6"),
                require.resolve("./rules/typescript/recommended"),
                require.resolve("./rules/angular/recommended"),
                require.resolve("./rules/rxjs/recommended"),
                require.resolve("./rules/extras")
            ]
        },
        {
            "files": [
                "src/**/*.html"
            ],
            "extends": [
                "plugin:@angular-eslint/template/recommended",
                require.resolve("./rules/angular-template")
            ]
        },
        {
            "files": [
                "e2e/**/*.ts"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": [
                    "tsconfig.eslint.json"
                ]
            },
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                require.resolve("./rules/es6"),
                require.resolve("./rules/typescript/recommended"),
                require.resolve("./rules/extras"),
                "plugin:cypress/recommended",
                "plugin:chai-friendly/recommended",
                require.resolve("./rules/cypress")
            ]
        }
    ]
};
