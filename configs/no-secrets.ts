import { type Config, defineConfig } from 'eslint/config';
import noSecretsPlugin from 'eslint-plugin-no-secrets';

import type { Configs, CreateOptions } from './common/configs.model';

const createRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/no-secrets (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/no-secrets/base',
                ...(options?.files ? { files: options.files } : {}), // files cannot be empty nor undefined
                plugins: {
                    'no-secrets': noSecretsPlugin,
                },
            },
            {
                name: '@hug-eslint-config/no-secrets/recommended',
                ...(options?.files ? { files: options.files } : {}), // files cannot be empty nor undefined
                rules: {
                    // Search for potential secrets/keys in code and JSON files
                    // https://github.com/nickdeis/eslint-plugin-no-secrets
                    'no-secrets/no-secrets': [
                        'error',
                        {
                            tolerance: 5,
                        },
                    ],

                    ...options?.rules,
                },
            },
        );

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['noSecrets'];
