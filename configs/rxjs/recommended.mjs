import rxjsAngularPlugin from 'eslint-plugin-rxjs-angular-updated';
import rxjsPlugin from 'eslint-plugin-rxjs-updated';

/** @type {Record<'ts' | 'angular', (files?: Array<string | string[]>) => import('eslint').Linter.Config>} */
export default {
    ts: files => ({
        name: 'hug/recommended/rxjs',
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        plugins: {
            rxjs: rxjsPlugin
        },
        rules: {
            // @ts-ignore
            ...rxjsPlugin.configs.recommended.rules,

            // Use Finnish notation
            // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/finnish.md
            'rxjs/finnish': [
                'error',
                {
                    names: {
                        '^(params|queryParams|stateChanges|canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false
                    }
                }
            ],

            // Use returned observables
            // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-ignored-observable.md
            'rxjs/no-ignored-observable': 'error',

            // Avoid using a behavior subject"s value
            // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-subject-value.md
            'rxjs/no-subject-value': 'error'
        }
    }),

    angular: files => ({
        name: 'hug/recommended/rxjs-angular',
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        plugins: {
            'rxjs-angular': rxjsAngularPlugin
        },
        rules: {
            // Use takeUntil and ngOnDestroy
            // https://github.com/cartant/eslint-plugin-rxjs-angular/blob/main/docs/rules/prefer-takeuntil.md
            'rxjs-angular/prefer-takeuntil': [
                'error',
                {
                    alias: [
                        'takeUntilDestroyed'
                    ],
                    checkDecorators: [
                        'Component',
                        'Directive',
                        'Pipe',
                        'Service'
                    ],
                    checkComplete: false, // Until https://github.com/cartant/eslint-plugin-rxjs-angular/issues/16 is implemented
                    checkDestroy: false
                }
            ]
        }
    })
};
