import tsPlugin from 'typescript-eslint';

const ALLOWED_PROPERTIES = [
    // angular
    '^\\[attr\\..*\\]$',
    '^\\[class\\..*\\]$',
    '^\\[style\\..*\\]$',

    // url params
    'PATIENT_ID',
    'SCOPEID',
    'SESSIONID',
    'EDS_ID',
    'DOCPAGE',

    // proxy call
    'REQUEST',
    'SERVERID',
    'SERVICEID',
    'SUBSERVICEID'
];

/** @type {(files?: Array<string | string[]>) => (import('eslint').Linter.Config)[]} */
export default files =>
    // @ts-ignore
    tsPlugin.config({
        name: 'hug/typescript',
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        extends: [
            ...tsPlugin.configs.strictTypeChecked,
            ...tsPlugin.configs.stylisticTypeChecked
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd()
            }
        },
        rules: {
            // Enforce consistent usage of type imports
            // https://typescript-eslint.io/rules/consistent-type-imports
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    fixStyle: 'inline-type-imports'
                }
            ],

            // Enforce default parameters to be last
            // https://typescript-eslint.io/rules/default-param-last
            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'error',

            // Require explicit return types on functions and class methods
            // https://typescript-eslint.io/rules/explicit-function-return-type
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowConciseArrowFunctionExpressionsStartingWithVoid: true
                }
            ],

            // Require explicit accessibility modifiers on class properties and methods
            // https://typescript-eslint.io/rules/explicit-member-accessibility
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        constructors: 'no-public',
                        accessors: 'explicit',
                        parameterProperties: 'explicit'
                    }
                }
            ],

            // Require a consistent member declaration order
            // https://typescript-eslint.io/rules/member-ordering
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: [
                        // Index signature
                        'signature',

                        // Fields
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',

                        'public-decorated-field',
                        'protected-decorated-field',
                        'private-decorated-field',

                        'public-instance-field',
                        'protected-instance-field',
                        'private-instance-field',

                        'public-abstract-field',
                        'protected-abstract-field',

                        'public-field',
                        'protected-field',
                        'private-field',

                        'static-field',
                        'instance-field',
                        'abstract-field',

                        'decorated-field',

                        'field',

                        // Constructors
                        'public-constructor',
                        'protected-constructor',
                        'private-constructor',

                        'constructor',

                        // Methods
                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',

                        'public-decorated-method',
                        'protected-decorated-method',
                        'private-decorated-method',

                        'public-instance-method',
                        'protected-instance-method',
                        'private-instance-method',

                        'public-abstract-method',
                        'protected-abstract-method',

                        'public-method',
                        'protected-method',
                        'private-method',

                        'static-method',
                        'instance-method',
                        'abstract-method',

                        'decorated-method',

                        'method'
                    ]
                }
            ],

            // Enforce using a particular method signature syntax
            // https://typescript-eslint.io/rules/method-signature-style
            '@typescript-eslint/method-signature-style': [
                'error',
                'property'
            ],

            // Enforce naming conventions for everything across a codebase
            // https://typescript-eslint.io/rules/naming-convention
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase']
                },
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE']
                },
                {
                    selector: 'property',
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'property',
                    modifiers: ['static'],
                    format: ['UPPER_CASE'],
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'property',
                    format: null,
                    filter: {
                        regex: `^(${ALLOWED_PROPERTIES.join('|')})$`,
                        match: true
                    },
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'parameter',
                    format: ['strictCamelCase'],
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'variable',
                    format: [
                        'strictCamelCase',
                        'UPPER_CASE'
                    ],
                    leadingUnderscore: 'allow'
                }
            ],

            // Disallow classes used as namespaces
            // https://typescript-eslint.io/rules/no-extraneous-class
            '@typescript-eslint/no-extraneous-class': [
                'error',
                {
                    allowWithDecorator: true
                }
            ],

            // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
            // https://typescript-eslint.io/rules/no-import-type-side-effects
            '@typescript-eslint/no-import-type-side-effects': 'error',

            // Disallow variable declarations from shadowing variables declared in the outer scope
            // https://typescript-eslint.io/rules/no-shadow
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            // Disallow unused variables
            // https://typescript-eslint.io/rules/no-unused-vars
            '@typescript-eslint/no-unused-vars': 'off', // disabled in favor of plugin: unused-imports/no-unused-vars

            // Warn when a namespace qualifier is unnecessary
            // https://typescript-eslint.io/rules/no-unnecessary-qualifier
            '@typescript-eslint/no-unnecessary-qualifier': 'error',

            // Enforce using the nullish coalescing operator instead of logical assignments or chaining
            // https://typescript-eslint.io/rules/prefer-nullish-coalescing
            '@typescript-eslint/prefer-nullish-coalescing': [
                'error',
                {
                    ignorePrimitives: true
                }
            ],

            // Exhaustiveness checking in switch with union type
            // https://typescript-eslint.io/rules/switch-exhaustiveness-check
            '@typescript-eslint/switch-exhaustiveness-check': [
                'error',
                {
                    allowDefaultCaseForExhaustiveSwitch: true,
                    considerDefaultExhaustiveForUnions: true,
                    requireDefaultForNonUnion: true
                }
            ],

            // Enforce unbound methods are called with their expected scope
            // https://typescript-eslint.io/rules/unbound-method
            '@typescript-eslint/unbound-method': [
                'error',
                {
                    ignoreStatic: true
                }
            ]
        }
    });
