import { type Config, defineConfig } from 'eslint/config';
import noLoopsPlugin from 'eslint-plugin-no-loops';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const createRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/no-loops (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/no-loops/base',
                files: options?.files ?? Files.NO_LOOPS,
                plugins: {
                    'no-loops': noLoopsPlugin,
                },
            },
            {
                name: '@hug-eslint-config/no-loops/recommended',
                files: options?.files ?? Files.NO_LOOPS,
                rules: {
                    // Disallow use of loops (for, for-in, while, do-while, for-of)
                    // https://github.com/buildo/eslint-plugin-no-loops
                    'no-loops/no-loops': 'error',

                    ...options?.rules,
                },
            },
        );

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['noLoops'];
