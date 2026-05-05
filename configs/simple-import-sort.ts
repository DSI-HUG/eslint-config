import { type Config, defineConfig } from 'eslint/config';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const createRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/simple-import-sort (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/simple-import-sort/base',
                files: options?.files ?? Files.SIMPLE_IMPORT_SORT,
                plugins: {
                    'simple-import-sort': simpleImportSortPlugin,
                },
            },
            {
                name: '@hug-eslint-config/simple-import-sort/recommended',
                files: options?.files ?? Files.SIMPLE_IMPORT_SORT,
                rules: {
                    // Easy autofixable import sorting
                    // https://github.com/lydell/eslint-plugin-simple-import-sort
                    'simple-import-sort/exports': 'error',
                    'simple-import-sort/imports': [
                        'error',
                        {
                            groups: [
                                // Side effect imports.
                                ['^\\u0000'],
                                // Packages.
                                // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                                ['^@?\\w'],
                                //
                                ['^[^(\\.|src/)]'],
                                //
                                ['^src/'],
                                // Relative imports.
                                // Anything that starts with a dot.
                                ['^\\.'],
                            ],
                        },
                    ],

                    ...options?.rules,
                },
            },
        );

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['simpleImportSort'];
