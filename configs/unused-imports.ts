import { type Config, defineConfig } from 'eslint/config';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const createRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/unused-imports (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/unused-imports/base',
                files: options?.files ?? Files.UNUSED_IMPORTS,
                plugins: {
                    'unused-imports': unusedImportsPlugin,
                },
            },
            {
                name: '@hug-eslint-config/unused-imports/recommended',
                files: options?.files ?? Files.UNUSED_IMPORTS,
                rules: {
                    // Find and remove unused es6 module imports
                    // https://github.com/sweepline/eslint-plugin-unused-imports
                    'no-unused-vars': 'off',
                    'unused-imports/no-unused-imports': 'error',
                    'unused-imports/no-unused-vars': [
                        'error',
                        {
                            vars: 'all',
                            varsIgnorePattern: '^_',
                            args: 'after-used',
                            argsIgnorePattern: '^_',
                        },
                    ],

                    ...options?.rules,
                },
            },
        );

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['unusedImports'];
