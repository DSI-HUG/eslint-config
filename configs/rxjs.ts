import { type Config, defineConfig } from 'eslint/config';
import rxjsPlugin from 'eslint-plugin-rxjs-x';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';
import { isPackageInstalled } from './common/utils';

const createRecommended = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/rxjs (disabled)',
        });
    } else if (!isPackageInstalled('rxjs')) {
        return defineConfig({
            name: '@hug-eslint-config/rxjs (not applicable)',
        });
    } else {
        return defineConfig(
            {
                name: '@hug-eslint-config/rxjs/base',
                files: options?.files ?? Files.RXJS,
                plugins: {
                    'rxjs-x': rxjsPlugin,
                },
            },
            {
                name: rxjsPlugin.configs.recommended.name,
                files: options?.files ?? Files.RXJS,
                rules: rxjsPlugin.configs.recommended.rules,
            },
            {
                name: '@hug-eslint-config/rxjs/recommended',
                files: options?.files ?? Files.RXJS,
                rules: {
                    // Use Finnish notation
                    // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/blob/main/docs/rules/finnish.md
                    'rxjs-x/finnish': [
                        'error',
                        {
                            names: {
                                '^(params|queryParams|stateChanges|canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
                            },
                        },
                    ],

                    // Use returned observables
                    // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/blob/main/docs/rules/no-floating-observables.md
                    'rxjs-x/no-floating-observables': 'error',

                    // Avoid using a behavior subject"s value
                    // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/blob/main/docs/rules/no-subject-value.md
                    'rxjs-x/no-subject-value': 'error',

                    ...options?.rules,
                },
            },
        );
    }
};

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['rxjs'];
