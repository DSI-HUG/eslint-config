import stylisticPlugin from '@stylistic/eslint-plugin';
import { type Config, defineConfig } from 'eslint/config';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';

const createRecommended = (options?: CreateOptions | false): Config[] =>
    (options === false)
        ? defineConfig({
            name: '@hug-eslint-config/stylistic (disabled)',
        })
        : defineConfig(
            {
                name: '@hug-eslint-config/stylistic/base',
                files: options?.files ?? Files.STYLISTIC,
                plugins: {
                    '@stylistic': stylisticPlugin,
                },
            },
            {
                name: '@stylistic/recommended',
                files: options?.files ?? Files.STYLISTIC,
                rules: stylisticPlugin.configs.recommended.rules,
            },
            {
                name: '@hug-eslint-config/stylistic/recommended',
                files: options?.files ?? Files.STYLISTIC,
                rules: {
                    // Enforce line breaks after opening and before closing array brackets
                    // https://eslint.style/rules/js/array-bracket-newline
                    '@stylistic/array-bracket-newline': ['error', 'consistent'],

                    // Enforce line breaks between array elements
                    // https://eslint.style/rules/js/array-element-newline
                    '@stylistic/array-element-newline': ['error', 'consistent'],

                    // Require parens in arrow function arguments
                    // https://eslint.style/rules/js/arrow-parens
                    '@stylistic/arrow-parens': [
                        'error',
                        'as-needed',
                        {
                            requireForBlockBody: false,
                        },
                    ],

                    // Enforce consistent brace style for blocks
                    // https://eslint.style/rules/js/brace-style
                    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

                    // Require or disallow spacing between function identifiers and their invocations
                    // https://eslint.style/rules/js/function-call-spacing
                    '@stylistic/function-call-spacing': 'error',

                    // Enforce consistent indentation
                    // https://eslint.style/rules/ts/indent
                    '@stylistic/indent': [
                        'error',
                        4,
                        {
                            SwitchCase: 1,
                            flatTernaryExpressions: false,
                            ignoredNodes: [],
                        },
                    ],

                    // Enforce consistent spacing between keys and values in object literal properties
                    // https://eslint.style/rules/js/key-spacing
                    '@stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],

                    // Enforce a maximum line length to increase code readability and maintainability
                    // https://eslint.style/rules/js/max-len
                    '@stylistic/max-len': 'off',

                    // Require a specific member delimiter style for interfaces and type literals
                    // https://eslint.style/rules/ts/member-delimiter-style
                    '@stylistic/member-delimiter-style': [
                        'error',
                        {
                            multiline: {
                                delimiter: 'semi',
                                requireLast: true,
                            },
                            singleline: {
                                delimiter: 'semi',
                                requireLast: false,
                            },
                        },
                    ],

                    // Enforce or disallow newlines between operands of a ternary expression.
                    // https://eslint.style/rules/multiline-ternary
                    '@stylistic/multiline-ternary': 'off',

                    // Disallow multiple empty lines
                    // https://eslint.style/rules/js/no-multiple-empty-lines
                    '@stylistic/no-multiple-empty-lines': ['error', { max: 2 }],

                    // Enforce consistent line breaks after opening and before closing braces
                    // https://eslint.style/rules/js/object-curly-newline
                    '@stylistic/object-curly-newline': [
                        'error',
                        {
                            multiline: true,
                            consistent: true,
                        },
                    ],

                    // Enforce placing object properties on separate lines
                    // https://eslint.style/rules/js/object-property-newline
                    '@stylistic/object-property-newline': [
                        'error',
                        {
                            allowAllPropertiesOnSameLine: true,
                        },
                    ],

                    // Enforce the consistent use of either backticks, double, or single quotes
                    // https://eslint.style/rules/js/quotes
                    '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: 'never' }],

                    // Require or disallow semicolons instead of ASI
                    // https://eslint.style/rules/js/semi
                    '@stylistic/semi': ['error', 'always'],

                    // Enforce location of semicolons
                    // https://eslint.style/rules/js/semi-style
                    '@stylistic/semi-style': 'error',

                    // Require or disallow a space before function parenthesis
                    // https://eslint.style/rules/js/space-before-function-paren
                    '@stylistic/space-before-function-paren': [
                        'error',
                        {
                            anonymous: 'never',
                            asyncArrow: 'always',
                            named: 'never',
                        },
                    ],

                    // Require or disallow a whitespace (space or tab) beginning a comment
                    // https://eslint.style/rules/js/spaced-comment
                    '@stylistic/spaced-comment': [
                        'error',
                        'always',
                        {
                            markers: ['/'],
                        },
                    ],

                    // Enforce spacing around colons of switch statements
                    // https://eslint.style/rules/js/switch-colon-spacing
                    '@stylistic/switch-colon-spacing': 'error',

                    ...options?.rules,
                },
            },
        );

export default {
    recommended: createRecommended(),
    createRecommended,
} satisfies Configs['configs']['stylistic'];
