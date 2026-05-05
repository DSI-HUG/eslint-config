import { type Config, defineConfig } from 'eslint/config';
import rxjsAngularPlugin from 'eslint-plugin-rxjs-angular-x';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';
import { isPackageInstalled } from './common/utils';

const createRecommended = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/rxjs-angular (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core') || !isPackageInstalled('rxjs')) {
        return defineConfig({
            name: '@hug-eslint-config/rxjs-angular (not applicable)',
        });
    } else {
        return defineConfig(
            {
                name: '@hug-eslint-config/rxjs-angular/base',
                files: options?.files ?? Files.RXJS_ANGULAR,
                plugins: {
                    'rxjs-angular-x': rxjsAngularPlugin,
                },
            },
            {
                name: '@hug-eslint-config/rxjs-angular/recommended',
                files: options?.files ?? Files.RXJS_ANGULAR,
                rules: {
                    // Use takeUntil and ngOnDestroy
                    // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-angular-x/blob/main/docs/rules/prefer-takeuntil.md
                    'rxjs-angular-x/prefer-takeuntil': [
                        'error',
                        {
                            alias: ['takeUntilDestroyed'],
                            checkDecorators: ['Component', 'Directive', 'Pipe', 'Service'],
                            checkComplete: false, // Until https://github.com/cartant/eslint-plugin-rxjs-angular/issues/16 is implemented
                            checkDestroy: false,
                        },
                    ],

                    ...options?.rules,
                },
            },
        );
    }
};

const createModerate = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/rxjs-angular (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core') || !isPackageInstalled('rxjs')) {
        return defineConfig({
            name: '@hug-eslint-config/rxjs-angular (not applicable)',
        });
    } else {
        return defineConfig(
            createRecommended(),
            {
                name: '@hug-eslint-config/rxjs-angular/moderate',
                files: options?.files ?? Files.RXJS_ANGULAR,
                rules: {
                    // Use takeUntil and ngOnDestroy
                    // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-angular-x/blob/main/docs/rules/prefer-takeuntil.md
                    'rxjs-angular-x/prefer-takeuntil': 'off',

                    ...options?.rules,
                },
            },
        );
    }
};

export default {
    recommended: createRecommended(),
    createRecommended,
    moderate: createModerate(),
    createModerate,
} satisfies Configs['configs']['rxjsAngular'];
