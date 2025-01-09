import jsPlugin from '@eslint/js';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/eslint${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    rules: rules ?? {
        ...jsPlugin.configs.recommended.rules,

        // Enforce or disallow the use of braces around arrow function body
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 'error',

        // Enforce return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'error',

        // Require CamelCase
        // https://eslint.org/docs/rules/camelcase
        camelcase: 'error',

        // Require return statements to either always or never specify values
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'error',

        // Require Following Curly Brace Conventions
        // https://eslint.org/docs/rules/curly
        curly: 'error',

        // Require Default Case in Switch Statements
        // https://eslint.org/docs/rules/default-case
        'default-case': 'error',

        // Enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        'default-case-last': 'error',

        // Require Dot Notation
        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': 'error',

        // Require === and !==
        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: [
            'error',
            'always'
        ],

        // Require Guarding for-in
        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'error',

        // Disallow bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // Disallow Use of caller/callee
        // https://eslint.org/docs/rules/no-caller
        'no-caller': 'error',

        // Disallow the use of console
        // https://eslint.org/docs/rules/no-console
        'no-console': [
            'error',
            {
                allow: [
                    'log',
                    'warn',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'dirxml',
                    'error',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                    'context'
                ]
            }
        ],

        // Disallow duplicate imports
        // https://eslint.org/docs/rules/no-duplicate-imports
        'no-duplicate-imports': 'error',

        // Disallow eval()
        // https://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // Disallow if statements as the only statement in else blocks
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',

        // Disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'error',

        // Disallow Primitive Wrapper Instances
        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // Disallow specific global variables
        // https://eslint.org/docs/rules/no-restricted-globals
        'no-restricted-globals': [
            'error',
            {
                name: 'event',
                message: 'Use local parameter instead.'
            },
            {
                name: 'fdescribe',
                message: "Do not commit 'fdescribe'. Use 'describe' instead."
            },
            {
                name: 'fit',
                message: "Do not commit 'fit'. Use 'it' instead."
            },
            {
                name: 'only',
                message: "Do not commit 'only'."
            }
        ],

        // Disallow specific imports
        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': [
            'error',
            'rxjs/Rx',
            'rxjs/internal/.*$',
            '@angular/material',
            'lodash'
        ],

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://eslint.org/docs/rules/no-shadow
        'no-shadow': [
            'error',
            {
                hoist: 'all'
            }
        ],

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // Restrict what can be thrown as an exception
        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'error',

        // Disallow Initializing to undefined
        // https://eslint.org/docs/rules/no-undef-init
        'no-undef-init': 'error',

        // Disallow ternary operators when simpler alternatives exist
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': 'error',

        // Disallow Unused Expressions
        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': 'error',

        // Disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': 'error',

        // Require let or const instead of var
        // https://eslint.org/docs/rules/no-var
        'no-var': 'error',

        // Enforce variables to be declared either together or separately in functions
        // https://eslint.org/docs/rules/one-var
        'one-var': [
            'error',
            'never'
        ],

        // Require using arrow functions for callbacks
        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'error',

        // Suggest using const
        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': 'error',

        // Prefer use of an object spread over Object.assign
        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 'error',

        // Suggest using template literals instead of string concatenation
        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',

        // Require Radix Parameter
        // https://eslint.org/docs/rules/radix
        radix: 'error'
    }
});
