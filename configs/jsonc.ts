import type { RulesConfig } from '@eslint/core';
import { type Config, defineConfig } from 'eslint/config';
import jsoncPlugin from 'eslint-plugin-jsonc';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const base: Config = {
    plugins: {
        jsonc: jsoncPlugin,
    },
    language: 'jsonc/x',
    rules: {
        // ESLint core rules known to cause problems with JSON.
        'strict': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
    },
};

const getRulesFromPlugin = (name: keyof typeof jsoncPlugin['configs']): Partial<RulesConfig> => {
    const config = jsoncPlugin.configs[name][2];
    if (!config?.rules || Object.keys(config).length !== 1) {
        throw new Error('Plugin `eslint-plugin-jsonc` no more compatible');
    }
    return config.rules;
};

const createJsonRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/json (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/json/base',
                files: options?.files ?? Files.JSON,
                ...base,
            },
            {
                name: 'jsonc/recommended-with-json',
                files: options?.files ?? Files.JSON,
                rules: getRulesFromPlugin('recommended-with-json'),
            },
            ...(options?.rules ? [{
                name: '@hug-eslint-config/json/recommended',
                files: options.files ?? Files.JSON,
                rules: options.rules,
            }] : []),
        );

const createJsoncRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/jsonc (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/jsonc/base',
                files: options?.files ?? Files.JSONC,
                ...base,
            },
            {
                name: 'jsonc/recommended-with-jsonc',
                files: options?.files ?? Files.JSONC,
                rules: getRulesFromPlugin('recommended-with-jsonc'),
            },
            ...(options?.rules ? [{
                name: '@hug-eslint-config/jsonc/recommended',
                files: options.files ?? Files.JSONC,
                rules: options.rules,
            }] : []),
        );

const createJson5Recommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/json5 (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/json5/base',
                files: options?.files ?? Files.JSON5,
                ...base,
            },
            {
                name: 'jsonc/recommended-with-json5',
                files: options?.files ?? Files.JSON5,
                rules: getRulesFromPlugin('recommended-with-json5'),
            },
            ...(options?.rules ? [{
                name: '@hug-eslint-config/json5/recommended',
                files: options.files ?? Files.JSON5,
                rules: options.rules,
            }] : []),
        );

export const json = {
    recommended: createJsonRecommended(),
    createRecommended: createJsonRecommended,
} satisfies Configs['configs']['json'];

export const jsonc = {
    recommended: createJsoncRecommended(),
    createRecommended: createJsoncRecommended,
} satisfies Configs['configs']['jsonc'];

export const json5 = {
    recommended: createJson5Recommended(),
    createRecommended: createJson5Recommended,
} satisfies Configs['configs']['json5'];
