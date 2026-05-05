import { type Config, defineConfig } from 'eslint/config';
import chaiFriendlyPlugin from 'eslint-plugin-chai-friendly';
import cypressPlugin from 'eslint-plugin-cypress';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';
import { isPackageInstalled } from './common/utils';

const createRecommended = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/cypress (disabled)',
        });
    } else if (!isPackageInstalled('cypress')) {
        return defineConfig({
            name: '@hug-eslint-config/cypress (not applicable)',
        });
    } else {
        return defineConfig(
            {
                name: '@hug-eslint-config/cypress/base',
                files: options?.files ?? Files.CYPRESS,
                plugins: {
                    'chai-friendly': chaiFriendlyPlugin,
                    'cypress': cypressPlugin,
                },
                languageOptions: cypressPlugin.configs.globals.languageOptions,
            },
            {
                name: cypressPlugin.configs.recommended.name,
                files: options?.files ?? Files.CYPRESS,
                rules: cypressPlugin.configs.recommended.rules,
            },
            {
                name: chaiFriendlyPlugin.configs.recommendedFlat.name,
                files: options?.files ?? Files.CYPRESS,
                rules: chaiFriendlyPlugin.configs.recommendedFlat.rules,
            },
            {
                name: '@hug-eslint-config/cypress/recommended',
                files: options?.files ?? Files.CYPRESS,
                rules: {
                    // Disallow unused variables
                    // https://eslint.org/docs/rules/no-unused-vars
                    'no-unused-vars': 'off',

                    // Disallow assigning any to variables and properties
                    // https://typescript-eslint.io/rules/no-unsafe-assignment
                    '@typescript-eslint/no-unsafe-assignment': 'off',

                    // Disallow calling an any type value
                    // https://typescript-eslint.io/rules/no-unsafe-call
                    '@typescript-eslint/no-unsafe-call': 'off',

                    // Disallow member access on any typed variables
                    // https://typescript-eslint.io/rules/no-unsafe-member-access
                    '@typescript-eslint/no-unsafe-member-access': 'off',

                    ...options?.rules,
                },
            },
        );
    }
};

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['cypress'];
