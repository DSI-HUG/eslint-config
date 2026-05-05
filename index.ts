/**
 * Package `@hug/eslint-config` <https://github.com/DSI-HUG/eslint-config>
 * Released under GNU General Public License v3.0 only <https://github.com/DSI-HUG/eslint-config/blob/main/LICENSE>
 * SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2022 HUG
 * @license GPL-3.0-only
 */

import { type Config, defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import angular from './configs/angular';
import type { Configs, Options } from './configs/common/configs.model';
import { Files } from './configs/common/files';
import cypress from './configs/cypress';
import eslint from './configs/eslint';
import jsdoc from './configs/jsdoc';
import { json, json5, jsonc } from './configs/jsonc';
import noLoops from './configs/no-loops';
import noSecrets from './configs/no-secrets';
import preferArrow from './configs/prefer-arrow';
import rxjs from './configs/rxjs';
import rxjsAngular from './configs/rxjsAngular';
import simpleImportSort from './configs/simple-import-sort';
import stylistic from './configs/stylistic';
import typescript from './configs/typescript';
import unusedImports from './configs/unused-imports';

const base = defineConfig(
    {
        name: '@hug-eslint-config/globals',
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jasmine,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },
    globalIgnores(Files.IGNORE, '@hug-eslint-config/ignores'),
);

const createConfig = (mode: 'recommended' | 'moderate', options?: Options): Config[] =>
    defineConfig(
        base,
        eslint.createRecommended(options?.eslint),
        typescript.createRecommended(options?.typescript),
        (mode === 'recommended')
            ? angular.ts.createRecommended(options?.angular?.ts)
            : angular.ts.createModerate(options?.angular?.ts),
        angular.html.createRecommended(options?.angular?.html),
        rxjs.createRecommended(options?.rxjs),
        (mode === 'recommended')
            ? rxjsAngular.createRecommended(options?.rxjsAngular)
            : rxjsAngular.createModerate(options?.rxjsAngular),
        cypress.createRecommended(options?.cypress),
        jsdoc.js.createRecommended(options?.jsdoc?.js),
        jsdoc.ts.createRecommended(options?.jsdoc?.ts),
        json.createRecommended(options?.json),
        jsonc.createRecommended(options?.jsonc),
        json5.createRecommended(options?.json5),
        noLoops.createRecommended(options?.noLoops),
        preferArrow.createRecommended(options?.preferArrow),
        simpleImportSort.createRecommended(options?.simpleImportSort),
        unusedImports.createRecommended(options?.unusedImports),
        noSecrets.createRecommended(options?.noSecrets),
        {
            name: '@hug-eslint-config/defaults',
            files: ['eslint.config.{js,mjs,cjs,ts,mts,cts}'],
            rules: {
                '@typescript-eslint/naming-convention': 'off',
            },
        },
    );

const configs: Configs = {
    files: Files,
    configs: {
        recommended: createConfig('recommended', {}),
        createRecommended: (options?: Options): Config[] => createConfig('recommended', options),
        moderate: createConfig('moderate', {}),
        createModerate: (options?: Options): Config[] => createConfig('moderate', options),
        angular,
        cypress,
        eslint,
        jsdoc,
        json,
        jsonc,
        json5,
        noLoops,
        noSecrets,
        preferArrow,
        rxjs,
        rxjsAngular,
        simpleImportSort,
        stylistic,
        typescript,
        unusedImports,
    },
};

export type {
    Config,
    Configs,
    Options,
} from './configs/common/configs.model';
export { Files } from './configs/common/files';
export default configs;
