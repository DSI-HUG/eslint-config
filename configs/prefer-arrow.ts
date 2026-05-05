import { type Config, defineConfig } from 'eslint/config';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const createRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/prefer-arrow (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/prefer-arrow/base',
                files: options?.files ?? Files.PREFER_ARROW,
                plugins: {
                    'prefer-arrow': preferArrowPlugin,
                },
            },
            {
                name: '@hug-eslint-config/prefer-arrow/recommended',
                files: options?.files ?? Files.PREFER_ARROW,
                rules: {
                    // Prefer arrow functions
                    // https://github.com/TristonJ/eslint-plugin-prefer-arrow
                    'prefer-arrow/prefer-arrow-functions': 'error',

                    ...options?.rules,
                },
            },
        );

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['preferArrow'];
