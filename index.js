/**
 * @license
 * @hug/eslint-config <https://github.com/DSI-HUG/eslint-config>
 * Released under GNU General Public License v3.0 only <https://github.com/DSI-HUG/eslint-config/blob/main/LICENSE>
 * SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2022 HUG
 */
import { findUpSync } from 'find-up';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import path from 'node:path';

import typescriptParser from '@typescript-eslint/parser';

import ts from './configs/typescript/index.js';
import es6 from './configs/es6.js';
import angular from './configs/angular.js';
import rxjs from './configs/rxjs.js';
import extras from './configs/extras.js';


const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// This is a workaround for https://github.com/eslint/eslint/issues/3458
// require('@rushstack/eslint-patch/levelrn-module-resolution');

// const isPackageInstalled = (name) => {
//     try { require(name); return true; } catch { return false; }
// };

// const needCypress = isPackageInstalled('cypress');
const needCypress = false;


// This is a workaround for vscode not finding the `tsconfig.eslint.json` at the root of a project
// when the project is opened through a vscode's workspace
const filename = 'tsconfig.eslint.json';
const tsconfigEslintJson = findUpSync(filename, { cwd: __dirname }) || filename;

/** @type { (level: 'moderate' | 'recommended') => import('eslint').Linter.FlatConfig[] } */
const config = (level) => {
    return [{
        files: ['**/*.ts'],
        ignores: ['e2e/**/*.ts'],
        languageOptions: {
            // @ts-ignore
            parser: typescriptParser,
            parserOptions: {
                project: [tsconfigEslintJson]
            }
        },
        ...es6.configs[level],
        ...ts.configs[level],
        ...angular.configs[level]
        ...rxjs.configs[level],
        ...extras.configs[level]
    }];
};

/** @type { import('./index.js') } */
export default {
    configs: {
        moderate: config('moderate'),
        recommended: config('recommended'),
    },
    es6,
    ts
};

const base2 = (level = 'recommended') => {
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
                    require.resolve(`./rules/typescript/${level}`),
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
