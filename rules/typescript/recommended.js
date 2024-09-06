const { namingConventions } = require('./utils');

module.exports = {
    'plugins': [
        'deprecation',
        '@typescript-eslint',
        '@stylistic'
    ],
    'extends': [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked'
    ],
    'rules': {
        /**
         *  ------ eslint core rules ------
         */

        'no-empty': 'error',

        /**
         *  ------ plugin deprecation rules ------
         */

        // Report usage of deprecated code
        // https://github.com/gund/eslint-plugin-deprecation
        'deprecation/deprecation': 'warn',

        /**
         *  ------ plugin typescript-eslint rules ------
         */

        // Consistent with type definition either interface or type
        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': 'error',

        // Enforce default parameters to be last
        // https://typescript-eslint.io/rules/default-param-last
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',

        // Enforce dot notation whenever possible
        // https://typescript-eslint.io/rules/dot-notation
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',

        // Require explicit return types on functions and class methods
        // https://typescript-eslint.io/rules/explicit-function-return-type
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                'allowConciseArrowFunctionExpressionsStartingWithVoid': true
            }
        ],

        // Require explicit accessibility modifiers on class properties and methods
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                'accessibility': 'explicit',
                'overrides': {
                    'constructors': 'explicit',
                    'accessors': 'explicit',
                    'methods': 'off',
                    'parameterProperties': 'explicit'
                }
            }
        ],

        // Require a consistent member declaration order
        // https://typescript-eslint.io/rules/member-ordering
        '@typescript-eslint/member-ordering': [
            'error',
            {
                'default': [
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
            ...namingConventions()
        ],

        // Require that .toString() is only called on objects which provide useful information when stringified
        // https://typescript-eslint.io/rules/no-base-to-string
        '@typescript-eslint/no-base-to-string': 'error',

        // Disallow the declaration of empty interfaces
        // https://typescript-eslint.io/rules/no-empty-interface
        '@typescript-eslint/no-empty-interface': 'error',

        // Disallow usage of the any type
        // https://typescript-eslint.io/rules/no-explicit-any
        '@typescript-eslint/no-explicit-any': 'error',

        // Disallow extra non-null assertion
        // https://typescript-eslint.io/rules/no-extra-non-null-assertion
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
        // https://typescript-eslint.io/rules/no-inferrable-types
        '@typescript-eslint/no-inferrable-types': 'error',

        // Enforce valid definition of new and constructor
        // https://typescript-eslint.io/rules/no-misused-new
        '@typescript-eslint/no-misused-new': 'error',

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://typescript-eslint.io/rules/no-shadow
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // Disallow unused variables
        // https://typescript-eslint.io/rules/no-unused-vars
        '@typescript-eslint/no-unused-vars': 'off', // disabled in favor of es6: unused-imports/no-unused-vars

        // Flag unnecessary equality comparisons against boolean literals
        // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        // Warn when a namespace qualifier is unnecessary
        // https://typescript-eslint.io/rules/no-unnecessary-qualifier
        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        // Disallow returning any from a function
        // https://typescript-eslint.io/rules/no-unsafe-return
        '@typescript-eslint/no-unsafe-return': 'error',

        // Disallow unnecessary constructors
        // https://typescript-eslint.io/rules/no-useless-constructor
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],

        // Disallow the use of require statements except in import statements
        // https://typescript-eslint.io/rules/no-var-requires
        '@typescript-eslint/no-var-requires': 'error',

        // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        // https://typescript-eslint.io/rules/prefer-for-of
        '@typescript-eslint/prefer-for-of': 'error',

        // Use function types instead of interfaces with call signatures
        // https://typescript-eslint.io/rules/prefer-function-type
        '@typescript-eslint/prefer-function-type': 'error',

        // Enforce includes method over indexOf method
        // https://typescript-eslint.io/rules/prefer-includes
        '@typescript-eslint/prefer-includes': 'error',

        // Enforce using the nullish coalescing operator instead of logical assignments or chaining
        // https://typescript-eslint.io/rules/prefer-nullish-coalescing
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                'ignorePrimitives': true
            }
        ],

        // Prefer using concise optional chain expressions instead of chained logical ands
        // https://typescript-eslint.io/rules/prefer-optional-chain
        '@typescript-eslint/prefer-optional-chain': 'error',

        // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
        // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        // Enforce template literal expressions to be of string type
        // https://typescript-eslint.io/rules/restrict-template-expressions
        '@typescript-eslint/restrict-template-expressions': 'error',

        // Exhaustiveness checking in switch with union type
        // https://typescript-eslint.io/rules/switch-exhaustiveness-check
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        // Enforce unbound methods are called with their expected scope
        // https://typescript-eslint.io/rules/unbound-method
        '@typescript-eslint/unbound-method': [
            'error',
            {
                'ignoreStatic': true
            }
        ],

        // Warn for any two overloads that could be unified into one by using a union or an optional/rest parameter
        // https://typescript-eslint.io/rules/unified-signatures
        '@typescript-eslint/unified-signatures': 'error',

        /**
         *  ------- stylistic rules ------
         */

        // Enforce a maximum line length to increase code readability and maintainability
        // https://eslint.style/rules/js/max-len
        '@stylistic/max-len': 'off',

        // Enforce consistent brace style for blocks
        // https://eslint.style/rules/ts/brace-style
        '@stylistic/brace-style': [
            'error',
            '1tbs'
        ],

        // Enforce consistent spacing before and after commas
        // https://eslint.style/rules/ts/comma-spacing
        '@stylistic/comma-spacing': 'error',

        // Require or disallow spacing between function identifiers and their invocations
        // https://eslint.style/rules/ts/func-call-spacing
        '@stylistic/func-call-spacing': 'error',

        // Enforce consistent indentation
        // https://eslint.style/rules/ts/indent
        '@stylistic/indent': 'error',

        // Enforce consistent spacing before and after keywords
        // https://eslint.style/rules/ts/keyword-spacing
        '@stylistic/keyword-spacing': 'error',

        // Require a specific member delimiter style for interfaces and type literals
        // https://eslint.style/rules/ts/member-delimiter-style
        '@stylistic/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'semi',
                    'requireLast': true
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false
                }
            }
        ],

        // Enforce the consistent use of either backticks, double, or single quotes
        // https://eslint.style/rules/ts/quotes
        '@stylistic/quotes': [
            'error',
            'single'
        ],

        // Require or disallow semicolons instead of ASI
        // https://eslint.style/rules/ts/semi
        '@stylistic/semi': [
            'error',
            'always'
        ],

        // Enforce consistent spacing before function parenthesis
        // https://eslint.style/rules/ts/space-before-function-paren
        '@stylistic/space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],

        // Ensure there are spaces around infix operators
        // https://eslint.style/rules/ts/space-infix-ops
        '@stylistic/space-infix-ops': [
            'error',
            {
                'int32Hint': false
            }
        ],

        // Require consistent spacing around type annotations
        // https://eslint.style/rules/ts/type-annotation-spacing
        '@stylistic/type-annotation-spacing': 'error'
    }
};
