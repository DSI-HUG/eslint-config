/**
 * Package `@hug/eslint-config` <https://github.com/DSI-HUG/eslint-config>
 * Released under GNU General Public License v3.0 only <https://github.com/DSI-HUG/eslint-config/blob/main/LICENSE>
 * SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2022 HUG
 * @license GPL-3.0-only
 */

import globals from 'globals';

import angular from './configs/angular.mjs';
import cypress from './configs/cypress.mjs';
import eslint from './configs/eslint.mjs';
import jsdoc from './configs/jsdoc.mjs';
import jsonc from './configs/jsonc.mjs';
import noLoops from './configs/no-loops.mjs';
import noSecrets from './configs/no-secrets.mjs';
import preferArrow from './configs/prefer-arrow.mjs';
import prettier from './configs/prettier.mjs';
import rxjs from './configs/rxjs.mjs';
import simpleImportSort from './configs/simple-import-sort.mjs';
import stylistic from './configs/stylistic.mjs';
import typescript from './configs/typescript.mjs';
import unusedImports from './configs/unused-imports.mjs';

/** @type {Record<string, string>} */
const DEFAULT_FILES = {
    TS: '**/*.ts',
    TS_MJS: '**/*.{ts,mjs}',
    JS_MJS_CJS: '**/*.{js,mjs,cjs}',
    TS_JS_MJS_CJS: '**/*.{ts,js,mjs,cjs}',
    HTML: '**/*.html',
    JSON: '**/*.json',
    JSONC: '**/*.jsonc',
    JSON5: '**/*.json5',
    E2E: 'e2e/**/*.ts'
};

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
    eslint([DEFAULT_FILES.TS_JS_MJS_CJS]),
    ...((await isPackageInstalled('typescript'))
        ? typescript([DEFAULT_FILES.TS])
        : [{ name: 'hug/typescript (not applicable)' }]),
    (await isPackageInstalled('rxjs'))
        ? rxjs[level].ts([DEFAULT_FILES.TS])
        : { name: 'hug/rxjs (not applicable)' },
    ...((await isPackageInstalled('@angular/core'))
        ? [
            ...angular[level].ts([DEFAULT_FILES.TS]),
            ...angular[level].html([DEFAULT_FILES.HTML]),
            rxjs[level].angular([DEFAULT_FILES.TS])
        ]
        : [{ name: 'hug/angular (not applicable)' }]),
    (await isPackageInstalled('cypress'))
        ? cypress([DEFAULT_FILES.E2E])
        : { name: 'hug/cypress (not applicable)' },
    noSecrets(),
    jsonc.json([DEFAULT_FILES.JSON]),
    jsonc.jsonc([DEFAULT_FILES.JSONC]),
    jsonc.json5([DEFAULT_FILES.JSON5]),
    jsdoc.js([DEFAULT_FILES.JS_MJS_CJS]),
    jsdoc.ts([DEFAULT_FILES.TS]),
    noLoops([DEFAULT_FILES.TS_JS_MJS_CJS]),
    preferArrow([DEFAULT_FILES.TS_JS_MJS_CJS]),
    simpleImportSort([DEFAULT_FILES.TS_MJS]),
    unusedImports([DEFAULT_FILES.TS_MJS]),
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
            '**/.nx',
            '**/.docusaurus',

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
        moderate: getConfig('moderate'),
        stylistic: stylistic([DEFAULT_FILES.TS_JS_MJS_CJS])
    },
    overrides: {
        eslint: (rules, files = [DEFAULT_FILES.TS_JS_MJS_CJS]) => eslint(files, rules),
        stylistic: (rules, files = [DEFAULT_FILES.TS_JS_MJS_CJS]) => stylistic(files, rules),
        typescript: (rules, files = [DEFAULT_FILES.TS]) => typescript(files, rules),
        rxjs: {
            ts: (rules, files = [DEFAULT_FILES.TS]) => rxjs.ts(files, rules),
            angular: (rules, files = [DEFAULT_FILES.TS]) => rxjs.angular(files, rules)
        },
        angular: {
            ts: (rules, files = [DEFAULT_FILES.TS]) => angular.ts(files, rules),
            html: (rules, files = [DEFAULT_FILES.HTML]) => angular.html(files, rules)
        },
        cypress: (rules, files = [DEFAULT_FILES.E2E]) => cypress(files, rules),
        noSecrets: (rules, files = []) => noSecrets(files, rules),
        json: (rules, files = [DEFAULT_FILES.JSON]) => jsonc.json(files, rules),
        jsonc: (rules, files = [DEFAULT_FILES.JSONC]) => jsonc.jsonc(files, rules),
        json5: (rules, files = [DEFAULT_FILES.JSON5]) => jsonc.json5(files, rules),
        jsdoc: {
            js: (rules, files = [DEFAULT_FILES.JS_MJS_CJS]) => jsdoc.js(files, rules),
            ts: (rules, files = [DEFAULT_FILES.TS]) => jsdoc.ts(files, rules)
        },
        noLoops: (rules, files = [DEFAULT_FILES.TS_JS_MJS_CJS]) => noLoops(files, rules),
        preferArrow: (rules, files = [DEFAULT_FILES.TS_JS_MJS_CJS]) => preferArrow(files, rules),
        simpleImportSort: (rules, files = [DEFAULT_FILES.TS_MJS]) => simpleImportSort(files, rules),
        unusedImports: (rules, files = [DEFAULT_FILES.TS_MJS]) => unusedImports(files, rules)
    }
};
