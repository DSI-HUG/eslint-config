/**
 * @license
 * @hug/eslint-config <https://github.com/DSI-HUG/eslint-config>
 * Released under GNU General Public License v3.0 only <https://github.com/DSI-HUG/eslint-config/blob/main/LICENSE>
 * SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2021 HUG
 */
'use strict';

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
            "package-lock.json"
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
                    "projectService": true,
                    "tsconfigRootDir": __dirname
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
                    "projectService": true,
                    "tsconfigRootDir": __dirname
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
                    "**/*.mjs"
                ],
                "parserOptions": {
                    "ecmaVersion": 11,
                    "sourceType": "module"
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
            }
        ]
    };
};
