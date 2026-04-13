import rxjsAngularPlugin from 'eslint-plugin-rxjs-angular-x';
import rxjsPlugin from 'eslint-plugin-rxjs-x';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 */

/** @type {Record<'TS' | 'ANGULAR', Rules>} */
const RECOMMENDED_RULES = {
    TS: {
        ...rxjsPlugin.configs.recommended.rules,

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
    },
    ANGULAR: {
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
    },
};

/** @type {(name: string, files?: (string | string[])[], rules?: Rules) => Config} */
const angular = (name, files, rules) => ({
    name,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'rxjs-angular-x': rxjsAngularPlugin,
    },
    rules: rules ?? {},
});

/** @type {(name: string, files?: (string | string[])[], rules?: Rules) => Config} */
const ts = (name, files, rules) => ({
    name,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'rxjs-x': rxjsPlugin,
    },
    rules: rules ?? {},
});

export default {
    /** @type {Record<'ts' | 'angular', (files?: (string | string[])[]) => Config>} */
    recommended: {
        ts: files => ts('hug/recommended/rxjs', files, RECOMMENDED_RULES.TS),
        angular: files => angular('hug/recommended/rxjs-angular', files, RECOMMENDED_RULES.ANGULAR),
    },

    /** @type {Record<'ts' | 'angular', (files?: (string | string[])[]) => Config>} */
    moderate: {
        ts: files => ts('hug/moderate/rxjs', files, RECOMMENDED_RULES.TS),
        angular: files =>
            angular('hug/moderate/rxjs-angular', files, {
                ...RECOMMENDED_RULES.ANGULAR,

                // Use takeUntil and ngOnDestroy
                // https://github.com/JasonWeinzierl/eslint-plugin-rxjs-angular-x/blob/main/docs/rules/prefer-takeuntil.md
                'rxjs-angular-x/prefer-takeuntil': 'off',
            }),
    },

    /** @type {(files?: (string | string[])[], rules?: Rules) => Config} */
    ts: (files, rules) => ts('hug/defaults/rxjs (overrides)', files, rules),

    /** @type {(files?: (string | string[])[], rules?: Rules) => Config} */
    angular: (files, rules) => angular('hug/defaults/rxjs-angular (overrides)', files, rules),
};
