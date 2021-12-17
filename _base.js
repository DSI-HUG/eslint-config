'use strict';

// This is a workaround for vscode not finding tsconfig.eslint.json when a workspace is opened
// instead of the root folder of the project
const filename = 'tsconfig.eslint.json';
const tsconfigEslintJson = require('find-up').sync(filename, { cwd: __dirname }) || filename;

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

const isPackageInstalled = (name) => {
    try { require(name); return true; } catch { return false; }
};

const needCypress = isPackageInstalled('cypress');

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
                "excludedFiles": [
                    "e2e/**/*.ts"
                ],
                "parser": "@typescript-eslint/parser",
                "parserOptions": {
                    "project": [
                        tsconfigEslintJson
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
                    "e2e/**/*.ts"
                ],
                "parser": "@typescript-eslint/parser",
                "parserOptions": {
                    "project": [
                        tsconfigEslintJson
                    ]
                },
                "extends": [
                    require.resolve("./rules/es6"),
                    require.resolve(`./rules/typescript/${mode}`),
                    require.resolve("./rules/extras"),
                    (needCypress) ? require.resolve("./rules/cypress") : undefined
                ].filter(Boolean)
            },
            {
                "files": [
                    "**/*.js"
                ],
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
            }
        ]
    };
};
