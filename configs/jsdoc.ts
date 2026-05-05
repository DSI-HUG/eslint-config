import { type Config, defineConfig } from 'eslint/config';
import jsdocPlugin from 'eslint-plugin-jsdoc';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const createJsRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/jsdoc/js (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/jsdoc/js/base',
                files: options?.files ?? Files.JSDOC_JS,
                plugins: {
                    jsdoc: jsdocPlugin,
                },
            },
            {
                name: jsdocPlugin.configs['flat/recommended'].name,
                files: options?.files ?? Files.JSDOC_JS,
                rules: jsdocPlugin.configs['flat/recommended'].rules,
            },
            ...(options?.rules ? [{
                name: '@hug-eslint-config/jsdoc/js/recommended',
                files: options.files ?? Files.JSDOC_JS,
                rules: options.rules,
            }] : []),
        );

const createTsRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/jsdoc/ts (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/jsdoc/ts/base',
                files: options?.files ?? Files.JSDOC_TS,
                plugins: {
                    jsdoc: jsdocPlugin,
                },
            },
            {
                name: jsdocPlugin.configs['flat/recommended-typescript'].name,
                files: options?.files ?? Files.JSDOC_TS,
                rules: jsdocPlugin.configs['flat/recommended-typescript'].rules,
            },
            ...(options?.rules ? [{
                name: '@hug-eslint-config/jsdoc/ts/recommended',
                files: options.files ?? Files.JSDOC_TS,
                rules: options.rules,
            }] : []),
        );

export default {
    js: {
        recommended: createJsRecommended(),
        createRecommended: createJsRecommended,
    },
    ts: {
        recommended: createTsRecommended(),
        createRecommended: createTsRecommended,
    },
} satisfies Configs['configs']['jsdoc'];
