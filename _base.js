'use strict';

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = (mode = 'recommended') => {
    return {
        "env": {
            "browser": true,
            "es6": true,
            "node": true,
            "jasmine": true
        },
        "ignorePatterns": [
            "package-lock.json",
            "projects/**/*"
        ],
        "overrides": [
            {
                "files": [
                    "**/*.ts"
                ],
                "parser": "@typescript-eslint/parser",
                "parserOptions": {
                    "project": [
                        "tsconfig.eslint.json"
                    ]
                },
                "extends": [
                    require.resolve("./rules/es6"),
                    require.resolve(`./rules/typescript/${mode}`),
                    require.resolve(`./rules/angular/${mode}`),
                    require.resolve(`./rules/rxjs/${mode}`),
                    require.resolve("./rules/extras")
                ]
            },
            {
                "files": [
                    "**/*.js"
                ],
                "parserOptions": {
                    "project": [
                        "tsconfig.eslint.json"
                    ]
                },
                "extends": [
                    require.resolve("./rules/es6"),
                    require.resolve("./rules/extras")
                ]
            },
            {
                "files": [
                    "**/*.html"
                ],
                "extends": [
                    require.resolve("./rules/angular-template")
                ]
            },
            {
                "files": [
                    "**/*.json"
                ],
                "extends": [
                    require.resolve("./rules/json")
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
                    require.resolve("./rules/es6"),
                    require.resolve(`./rules/typescript/${mode}`),
                    require.resolve("./rules/extras"),
                    require.resolve("./rules/cypress")
                ]
            }
        ]
    };
};
