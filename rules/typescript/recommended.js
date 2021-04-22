const { namingConventions } = require('./utils');

module.exports = {
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "rules": {
        "max-len": "off",
        "no-shadow": "off",
        "no-empty": "error",

        // Enforce consistent brace style for blocks
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
        "brace-style": "off",
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs"
        ],

        // Enforce consistent spacing before and after commas
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": "error",

        // Consistent with type definition either interface or type
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        "@typescript-eslint/consistent-type-definitions": "error",

        // Enforce default parameters to be last
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",

        // Require explicit return types on functions and class methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowConciseArrowFunctionExpressionsStartingWithVoid": true
            }
        ],

        // Require explicit accessibility modifiers on class properties and methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "explicit",
                    "accessors": "explicit",
                    "methods": 'off',
                    "parameterProperties": "explicit"
                }
            }
        ],

        // Require or disallow spacing between function identifiers and their invocations
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": "error",

        // Enforce consistent indentation
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        "indent": "off",
        "@typescript-eslint/indent": "error",

        // Enforce consistent spacing before and after keywords
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "error",

        // Require a specific member delimiter style for interfaces and type literals
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],

        // Require a consistent member declaration order
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    // Index signature
                    "signature",

                    // Fields
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",

                    "public-decorated-field",
                    "protected-decorated-field",
                    "private-decorated-field",

                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",

                    "public-abstract-field",
                    "protected-abstract-field",
                    "private-abstract-field",

                    "public-field",
                    "protected-field",
                    "private-field",

                    "static-field",
                    "instance-field",
                    "abstract-field",

                    "decorated-field",

                    "field",

                    // Constructors
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",

                    "constructor",

                    // Methods
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",

                    "public-decorated-method",
                    "protected-decorated-method",
                    "private-decorated-method",

                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",

                    "public-abstract-method",
                    "protected-abstract-method",
                    "private-abstract-method",

                    "public-method",
                    "protected-method",
                    "private-method",

                    "static-method",
                    "instance-method",
                    "abstract-method",

                    "decorated-method",

                    "method"
                ]
            }
        ],

        // Enforce using a particular method signature syntax
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
        "@typescript-eslint/method-signature-style": [
            "error",
            "method"
        ],

        // Enforce naming conventions for everything across a codebase
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        "@typescript-eslint/naming-convention": [
            "error",
            ...namingConventions()
        ],

        // Require that .toString() is only called on objects which provide useful information when stringified
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
        "@typescript-eslint/no-base-to-string": "error",

        // Disallow the declaration of empty interfaces
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        "@typescript-eslint/no-empty-interface": "error",

        // Disallow extra non-null assertion
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
        "@typescript-eslint/no-extra-non-null-assertion": "error",

        // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        "@typescript-eslint/no-inferrable-types": "error",

        // Enforce valid definition of new and constructor
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
        "@typescript-eslint/no-misused-new": "error",

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],

        // Disallow unused variables
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars-experimental": "error",

        // Flag unnecessary equality comparisons against boolean literals
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

        // Warn when a namespace qualifier is unnecessary
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        "@typescript-eslint/no-unnecessary-qualifier": "error",

        // Disallow returning any from a function
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
        "@typescript-eslint/no-unsafe-return": "error",

        // Disallow the use of require statements except in import statements
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
        "@typescript-eslint/no-var-requires": "error",

        // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
        "@typescript-eslint/prefer-for-of": "error",

        // Use function types instead of interfaces with call signatures
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
        "@typescript-eslint/prefer-function-type": "error",

        // Enforce includes method over indexOf method
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
        "@typescript-eslint/prefer-includes": "error",

        // Prefer using concise optional chain expressions instead of chained logical ands
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        "@typescript-eslint/prefer-optional-chain": "error",

        // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
        "@typescript-eslint/prefer-string-starts-ends-with": "error",

        // Enforce the consistent use of either backticks, double, or single quotes
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
        "quotes": "off",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],

        // Enforce template literal expressions to be of string type
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
        "@typescript-eslint/restrict-template-expressions": "error",

        // Require or disallow semicolons instead of ASI
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
        "semi": "off",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],

        // Enforce consistent spacing before function parenthesis
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }],

        // Exhaustiveness checking in switch with union type
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
        "@typescript-eslint/switch-exhaustiveness-check": "error",

        // Require consistent spacing around type annotations
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        "@typescript-eslint/type-annotation-spacing": "error",

        // Enforce unbound methods are called with their expected scope
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
        "@typescript-eslint/unbound-method": [
            "error",
            {
                "ignoreStatic": true
            }
        ],

        // Warn for any two overloads that could be unified into one by using a union or an optional/rest parameter
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
        "@typescript-eslint/unified-signatures": "error"
    }
};
