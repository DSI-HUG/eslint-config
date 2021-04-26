module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "generators": false,
            "objectLiteralDuplicateProperties": false
        }
    },
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        // Enforce or disallow the use of braces around arrow function body
        // https://eslint.org/docs/rules/arrow-body-style
        "arrow-body-style": "error",

        // Enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        "array-bracket-newline": [
            "error",
            "consistent"
        ],

        // Enforce consistent spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        "array-bracket-spacing": "error",

        // Enforce return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        "array-callback-return": "error",

        // Enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        "array-element-newline": [
            "error",
            "consistent"
        ],

        // Require parens in arrow function arguments
        // https://eslint.org/docs/rules/arrow-parens
        "arrow-parens": [
            "error",
            "as-needed"
        ],

        // Require space before/after arrow function's arrow
        // https://eslint.org/docs/rules/arrow-spacing
        "arrow-spacing": "error",

        // Disallow or enforce spaces inside of blocks after opening block and before closing block
        // https://eslint.org/docs/rules/block-spacing
        "block-spacing": "error",

        // Enforce consistent brace style for blocks
        // https://eslint.org/docs/rules/brace-style
        "brace-style": [
            "error",
            "1tbs"
        ],

        // Require CamelCase
        // https://eslint.org/docs/rules/camelcase
        "camelcase": "error",

        // Require or disallow trailing commas
        // https://eslint.org/docs/rules/comma-dangle
        "comma-dangle": "error",

        // Enforce spacing around commas
        // https://eslint.org/docs/rules/comma-spacing
        "comma-spacing": "error",

        // Enforce consistent comma style in array literals, object literals, and variable declarations
        // https://eslint.org/docs/rules/comma-style
        "comma-style": "error",

        // Disallow or enforce spaces inside of computed properties
        // https://eslint.org/docs/rules/computed-property-spacing
        "computed-property-spacing": "error",

        // Require return statements to either always or never specify values
        // https://eslint.org/docs/rules/consistent-return
        "consistent-return": "error",

        // Require Following Curly Brace Conventions
        // https://eslint.org/docs/rules/curly
        "curly": "error",

        // Require Default Case in Switch Statements
        // https://eslint.org/docs/rules/default-case
        "default-case": "error",

        // Enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        "default-case-last": "error",

        // Require Dot Notation
        // https://eslint.org/docs/rules/dot-notation
        "dot-notation": "error",

        // Require or disallow newline at the end of files
        // https://eslint.org/docs/rules/eol-last
        "eol-last": "error",

        // Require === and !==
        // https://eslint.org/docs/rules/eqeqeq
        "eqeqeq": [
            "error",
            "always"
        ],

        // Require or disallow spacing between function identifiers and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        "func-call-spacing": "error",

        // Require Guarding for-in
        // https://eslint.org/docs/rules/guard-for-in
        "guard-for-in": "error",

        // Enforce consistent spacing between keys and values in object literal properties
        // https://eslint.org/docs/rules/key-spacing
        "key-spacing": "error",

        // Enforce consistent spacing before and after keywords
        // https://eslint.org/docs/rules/keyword-spacing
        "keyword-spacing": "error",

        // Require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],

        // Enforce a maximum number of statements allowed per line
        // https://eslint.org/docs/rules/max-statements-per-line
        "max-statements-per-line": "error",

        // Disallow bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        "no-bitwise": "error",

        // Disallow Use of caller/callee
        // https://eslint.org/docs/rules/no-caller
        "no-caller": "error",

        // Disallow the use of console
        // https://eslint.org/docs/rules/no-console
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],

        // Disallow the use of debugger
        // https://eslint.org/docs/rules/no-debugger
        "no-debugger": "error",

        // Disallow eval()
        // https://eslint.org/docs/rules/no-eval
        "no-eval": "error",

        // Disallow Case Statement Fallthrough
        // https://eslint.org/docs/rules/no-fallthrough
        "no-fallthrough": "error",

        // Disallow Floating Decimals
        // https://eslint.org/docs/rules/no-floating-decimal
        "no-floating-decimal": "error",

        // Disallow irregular whitespace
        // https://eslint.org/docs/rules/no-irregular-whitespace
        "no-irregular-whitespace": "error",

        // Disallow if statements as the only statement in else blocks
        // https://eslint.org/docs/rules/no-lonely-if
        "no-lonely-if": "error",

        // Disallow multiple spaces
        // https://eslint.org/docs/rules/no-multi-spaces
        "no-multi-spaces": "error",

        // Disallow multiple empty lines
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        "no-multiple-empty-lines": "error",

        // Disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        "no-nested-ternary": "error",

        // Disallow Primitive Wrapper Instances
        // https://eslint.org/docs/rules/no-new-wrappers
        "no-new-wrappers": "error",

        // Disallow variable redeclaration
        // https://eslint.org/docs/rules/no-redeclare
        "no-redeclare": "error",

        // Disallow specific global variables
        // https://eslint.org/docs/rules/no-restricted-globals
        "no-restricted-globals": [
            "error",
            {
                "name": "event",
                "message": "Use local parameter instead."
            },
            {
                "name": "fdescribe",
                "message": "Do not commit \'fdescribe\'. Use \'describe\' instead."
            },
            {
                "name": "fit",
                "message": "Do not commit \'fit\'. Use \'it\' instead."
            },
            {
                "name": "only",
                "message": "Do not commit \'only\'."
            }
        ],

        // Disallow specific imports
        // https://eslint.org/docs/rules/no-restricted-imports
        "no-restricted-imports": [
            "error",
            "rxjs/Rx",
            "rxjs/internal/.*$",
            "@angular/material",
            "lodash"
        ],

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://eslint.org/docs/rules/no-shadow
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        "no-template-curly-in-string": "error",

        // Restrict what can be thrown as an exception
        // https://eslint.org/docs/rules/no-throw-literal
        "no-throw-literal": "error",

        // Disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces
        "no-trailing-spaces": "error",

        // Disallow Initializing to undefined
        // https://eslint.org/docs/rules/no-undef-init
        "no-undef-init": "error",

        // Disallow ternary operators when simpler alternatives exist
        // https://eslint.org/docs/rules/no-unneeded-ternary
        "no-unneeded-ternary": "error",

        // Disallow Unused Expressions
        // https://eslint.org/docs/rules/no-unused-expressions
        "no-unused-expressions": "error",

        // Disallow Unused Labels
        // https://eslint.org/docs/rules/no-unused-labels
        "no-unused-labels": "error",

        // Disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        "no-useless-rename": "error",

        // Require let or const instead of var
        // https://eslint.org/docs/rules/no-var
        "no-var": "error",

        // Disallow whitespace before properties
        // https://eslint.org/docs/rules/no-whitespace-before-property
        "no-whitespace-before-property": "error",

        // Enforce consistent line breaks after opening and before closing braces
        // https://eslint.org/docs/rules/object-curly-newline
        "object-curly-newline": [
            "error",
            {
                "multiline": true,
                "consistent": true
            }
        ],

        // Enforce consistent spacing inside braces
        // https://eslint.org/docs/rules/object-curly-spacing
        "object-curly-spacing": [
            "error",
            "always"
        ],

        // Enforce placing object properties on separate lines
        // https://eslint.org/docs/rules/object-property-newline
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": true
            }
        ],

        // Enforce variables to be declared either together or separately in functions
        // https://eslint.org/docs/rules/one-var
        "one-var": [
            "error",
            "never"
        ],

        // Require using arrow functions for callbacks
        // https://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-arrow-callback": "error",

        // Suggest using const
        // https://eslint.org/docs/rules/prefer-const
        "prefer-const": "error",

        // Prefer use of an object spread over Object.assign
        // https://eslint.org/docs/rules/prefer-object-spread
        "prefer-object-spread": "error",

        // Suggest using template literals instead of string concatenation
        // https://eslint.org/docs/rules/prefer-template
        "prefer-template": "error",

        // Enforce the consistent use of either backticks, double, or single quotes
        // https://eslint.org/docs/rules/quotes
        "quotes": [
            "error",
            "single"
        ],

        // Require Radix Parameter
        // https://eslint.org/docs/rules/radix
        "radix": "error",

        // Enforce spacing between rest and spread operators and their expressions
        // https://eslint.org/docs/rules/rest-spread-spacing
        "rest-spread-spacing": "error",

        // Require or disallow semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        "semi": [
            "error",
            "always"
        ],

        // Enforce spacing before and after semicolons
        // https://eslint.org/docs/rules/semi-spacing
        "semi-spacing": "error",

        // Enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        "semi-style": "error",

        // Require Or Disallow Space Before Blocks
        // https://eslint.org/docs/rules/space-before-blocks
        "space-before-blocks": "error",

        // Require or disallow a space before function parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],

        // Disallow or enforce spaces inside of parentheses
        // https://eslint.org/docs/rules/space-in-parens
        "space-in-parens": "error",

        // Require spacing around infix operators
        // https://eslint.org/docs/rules/space-infix-ops
        "space-infix-ops": "error",

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        "space-unary-ops": "error",

        // Require or disallow a whitespace (space or tab) beginning a comment
        // https://eslint.org/docs/rules/spaced-comment
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],

        // Enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        "switch-colon-spacing": "error",

        // Enforce Usage of Spacing in Template Strings
        // https://eslint.org/docs/rules/template-curly-spacing
        "template-curly-spacing": "error",

        // Require calls to isNaN() when checking for NaN
        // https://eslint.org/docs/rules/use-isnan
        "use-isnan": "error"
    }
};
