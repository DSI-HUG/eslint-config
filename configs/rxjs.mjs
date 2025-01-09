import rxjsAngularPlugin from 'eslint-plugin-rxjs-angular-updated';
import rxjsPlugin from 'eslint-plugin-rxjs-updated';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 */

/** @type {Record<'TS' | 'ANGULAR', Rules>} */
const RECOMMENDED_RULES = {
    TS: {
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
    },
    ANGULAR: {
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
};

/** @type {(name: string, files?: (string | string[])[], rules?: Rules) => Config} */
const angular = (name, files, rules) => ({
    name,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'rxjs-angular': rxjsAngularPlugin
    },
    rules: rules ?? {}
});

/** @type {(name: string, files?: (string | string[])[], rules?: Rules) => Config} */
const ts = (name, files, rules) => ({
    name,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        rxjs: rxjsPlugin
    },
    rules: rules ?? {}
});

export default {
    /** @type {Record<'ts' | 'angular', (files?: (string | string[])[]) => Config>} */
    recommended: {
        ts: files => ts('hug/recommended/rxjs', files, RECOMMENDED_RULES.TS),
        angular: files => angular('hug/recommended/rxjs-angular', files, RECOMMENDED_RULES.ANGULAR)
    },

    /** @type {Record<'ts' | 'angular', (files?: (string | string[])[]) => Config>} */
    moderate: {
        ts: files => ts('hug/moderate/rxjs', files, RECOMMENDED_RULES.TS),
        angular: files =>
            angular('hug/moderate/rxjs-angular', files, {
                ...RECOMMENDED_RULES.ANGULAR,

                // Use takeUntil and ngOnDestroy
                // https://github.com/cartant/eslint-plugin-rxjs-angular/blob/main/docs/rules/prefer-takeuntil.md
                'rxjs-angular/prefer-takeuntil': 'off'
            })
    },

    /** @type {(files?: (string | string[])[], rules?: Rules) => Config} */
    ts: (files, rules) => ts('hug/rxjs (overrides)', files, rules),

    /** @type {(files?: (string | string[])[], rules?: Rules) => Config} */
    angular: (files, rules) => angular('hug/rxjs-angular (overrides)', files, rules)
};
