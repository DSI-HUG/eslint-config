/**
 * Package @hug/eslint-config <https://github.com/DSI-HUG/eslint-config>
 * Released under GNU General Public License v3.0 only <https://github.com/DSI-HUG/eslint-config/blob/main/LICENSE>
 * SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2022 HUG
 * @license GPL-3.0-only
 */

import globals from 'globals';

import angular from './configs/angular/index.mjs';
import cypress from './configs/cypress.mjs';
import eslint from './configs/eslint.mjs';
import jsdoc from './configs/jsdoc.mjs';
import jsonc from './configs/jsonc.mjs';
import noLoops from './configs/no-loops.mjs';
import noSecrets from './configs/no-secrets.mjs';
import preferArrow from './configs/prefer-arrow.mjs';
import prettier from './configs/prettier.mjs';
import rxjs from './configs/rxjs/index.mjs';
import simpleImportSort from './configs/simple-import-sort.mjs';
import typescript from './configs/typescript.mjs';
import unusedImports from './configs/unused-imports.mjs';

/** @type {(name: string) => Promise<boolean>} */
const isPackageInstalled = async name => {
    try {
        await import(name);
        return true;
    } catch {
        return false;
    }
};

/** @type { (level: 'moderate' | 'recommended') => Promise<import('eslint').Linter.Config[]> } */
const getConfig = async level => [
    eslint(['**/*.{ts,js,mjs,cjs}']),
    ...((await isPackageInstalled('typescript')) ? typescript(['**/*.ts']) : []),
    (await isPackageInstalled('rxjs')) ? rxjs[level].ts(['**/*.ts']) : {},
    ...((await isPackageInstalled('@angular/core')) ? [
              ...angular[level].ts(['**/*.ts']),
              ...angular[level].html(['**/*.html']),
              rxjs[level].angular(['**/*.ts'])
          ] : []),
    (await isPackageInstalled('cypress')) ? cypress(['e2e/**/*.ts']) : {},
    noSecrets(),
    jsonc.json(['**/*.json']),
    jsonc.jsonc(['**/*.jsonc']),
    jsonc.json5(['**/*.json5']),
    jsdoc.js(['**/*.{js,mjs,cjs}']),
    jsdoc.ts(['**/*.ts']),
    noLoops(['**/*.{ts,js,mjs,cjs}']),
    preferArrow(['**/*.{ts,js,mjs,cjs}']),
    simpleImportSort(['**/*.{ts,mjs}']),
    unusedImports(['**/*.{ts,mjs}']),
    prettier(),
    {
        name: 'hug/defaults/global',
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jasmine
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error'
        }
    },
    {
        name: 'hug/defaults/ignores',
        ignores: [
            // Compiled output
            '**/dist/',
            '**/tmp/',

            // Node
            '**/node_modules/',
            '**/package-lock.json',
            '**/yarn.lock',
            '**/npm-debug.log',
            '**/yarn-error.log',

            // IDEs and editors
            '**/.vscode/',
            '**/.idea/',
            '**/.project/',
            '**/.classpath/',
            '**/.settings/',
            '**/*.launch',
            '**/.c9/',
            '**/*.sublime-workspace',

            // Miscellaneous
            '**/.git/',
            '**/.angular/',
            '**/.sass-cache/',

            // System files
            '**/.DS_Store',
            '**/Thumbs.db',

            // Capacitor/Cordova
            '**/android/',
            '**/ios/'
        ]
    }
];

/** @type { import('./index').HugConfig } */
export default {
    configs: {
        recommended: getConfig('recommended'),
        moderate: getConfig('moderate')
    }
};
