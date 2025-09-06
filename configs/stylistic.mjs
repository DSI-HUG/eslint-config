import stylisticPlugin from '@stylistic/eslint-plugin';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/stylistic${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        '@stylistic': stylisticPlugin
    },
    rules: rules ?? {
        // Enforce line breaks after opening and before closing array brackets
        // https://eslint.style/rules/js/array-bracket-newline
        '@stylistic/array-bracket-newline': ['error', 'consistent'],

        // Enforce consistent spacing inside array brackets
        // https://eslint.style/rules/js/array-bracket-spacing
        '@stylistic/array-bracket-spacing': 'error',

        // Enforce line breaks between array elements
        // https://eslint.style/rules/js/array-element-newline
        '@stylistic/array-element-newline': ['error', 'consistent'],

        // Require parens in arrow function arguments
        // https://eslint.style/rules/js/arrow-parens
        '@stylistic/arrow-parens': ['error', 'as-needed'],

        // Require space before/after arrow function's arrow
        // https://eslint.style/rules/js/arrow-spacing
        '@stylistic/arrow-spacing': 'error',

        // Disallow or enforce spaces inside of blocks after opening block and before closing block
        // https://eslint.style/rules/js/block-spacing
        '@stylistic/block-spacing': 'error',

        // Enforce consistent brace style for blocks
        // https://eslint.style/rules/js/brace-style
        '@stylistic/brace-style': ['error', '1tbs'],

        // Require or disallow trailing commas
        // https://eslint.style/rules/js/comma-dangle
        '@stylistic/comma-dangle': 'error',

        // Enforce spacing around commas
        // https://eslint.style/rules/js/comma-spacing
        '@stylistic/comma-spacing': 'error',

        // Enforce consistent comma style in array literals, object literals, and variable declarations
        // https://eslint.style/rules/js/comma-style
        '@stylistic/comma-style': 'error',

        // Disallow or enforce spaces inside of computed properties
        // https://eslint.style/rules/js/computed-property-spacing
        '@stylistic/computed-property-spacing': 'error',

        // Require or disallow newline at the end of files
        // https://eslint.style/rules/js/eol-last
        '@stylistic/eol-last': 'error',

        // Require or disallow spacing between function identifiers and their invocations
        // https://eslint.style/rules/js/function-call-spacing
        '@stylistic/function-call-spacing': 'error',

        // Enforce consistent indentation
        // https://eslint.style/rules/ts/indent
        '@stylistic/indent': 'error',

        // Enforce consistent spacing between keys and values in object literal properties
        // https://eslint.style/rules/js/key-spacing
        '@stylistic/key-spacing': 'error',

        // Enforce consistent spacing before and after keywords
        // https://eslint.style/rules/js/keyword-spacing
        '@stylistic/keyword-spacing': 'error',

        // Require or disallow an empty line between class members
        // https://eslint.style/rules/js/lines-between-class-members
        '@stylistic/lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],

        // Enforce a maximum line length to increase code readability and maintainability
        // https://eslint.style/rules/js/max-len
        '@stylistic/max-len': 'off',

        // Enforce a maximum number of statements allowed per line
        // https://eslint.style/rules/js/max-statements-per-line
        '@stylistic/max-statements-per-line': 'error',

        // Require a specific member delimiter style for interfaces and type literals
        // https://eslint.style/rules/ts/member-delimiter-style
        '@stylistic/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }
        ],

        // Disallow Floating Decimals
        // https://eslint.style/rules/js/no-floating-decimal
        '@stylistic/no-floating-decimal': 'error',

        // Disallow multiple spaces
        // https://eslint.style/rules/js/no-multi-spaces
        '@stylistic/no-multi-spaces': 'error',

        // Disallow multiple empty lines
        // https://eslint.style/rules/js/no-multiple-empty-lines
        '@stylistic/no-multiple-empty-lines': 'error',

        // Disallow trailing whitespace at the end of lines
        // https://eslint.style/rules/js/no-trailing-spaces
        '@stylistic/no-trailing-spaces': 'error',

        // Disallow whitespace before properties
        // https://eslint.style/rules/js/no-whitespace-before-property
        '@stylistic/no-whitespace-before-property': 'error',

        // Enforce consistent line breaks after opening and before closing braces
        // https://eslint.style/rules/js/object-curly-newline
        '@stylistic/object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ],

        // Enforce consistent spacing inside braces
        // https://eslint.style/rules/js/object-curly-spacing
        '@stylistic/object-curly-spacing': ['error', 'always'],

        // Enforce placing object properties on separate lines
        // https://eslint.style/rules/js/object-property-newline
        '@stylistic/object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true
            }
        ],

        // Enforce the consistent use of either backticks, double, or single quotes
        // https://eslint.style/rules/js/quotes
        '@stylistic/quotes': ['error', 'single'],

        // Enforce spacing between rest and spread operators and their expressions
        // https://eslint.style/rules/js/rest-spread-spacing
        '@stylistic/rest-spread-spacing': 'error',

        // Require or disallow semicolons instead of ASI
        // https://eslint.style/rules/js/semi
        '@stylistic/semi': ['error', 'always'],

        // Enforce spacing before and after semicolons
        // https://eslint.style/rules/js/semi-spacing
        '@stylistic/semi-spacing': 'error',

        // Enforce location of semicolons
        // https://eslint.style/rules/js/semi-style
        '@stylistic/semi-style': 'error',

        // Require Or Disallow Space Before Blocks
        // https://eslint.style/rules/js/space-before-blocks
        '@stylistic/space-before-blocks': 'error',

        // Require or disallow a space before function parenthesis
        // https://eslint.style/rules/js/space-before-function-paren
        '@stylistic/space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],

        // Disallow or enforce spaces inside of parentheses
        // https://eslint.style/rules/js/space-in-parens
        '@stylistic/space-in-parens': 'error',

        // Require spacing around infix operators
        // https://eslint.style/rules/js/space-infix-ops
        '@stylistic/space-infix-ops': [
            'error',
            {
                int32Hint: false
            }
        ],

        // Require or disallow spaces before/after unary operators
        // https://eslint.style/rules/js/space-unary-ops
        '@stylistic/space-unary-ops': 'error',

        // Require or disallow a whitespace (space or tab) beginning a comment
        // https://eslint.style/rules/js/spaced-comment
        '@stylistic/spaced-comment': [
            'error',
            'always',
            {
                markers: ['/']
            }
        ],

        // Enforce spacing around colons of switch statements
        // https://eslint.style/rules/js/switch-colon-spacing
        '@stylistic/switch-colon-spacing': 'error',

        // Enforce Usage of Spacing in Template Strings
        // https://eslint.style/rules/js/template-curly-spacing
        '@stylistic/template-curly-spacing': 'error',

        // Require consistent spacing around type annotations
        // https://eslint.style/rules/ts/type-annotation-spacing
        '@stylistic/type-annotation-spacing': 'error'
    }
});
