module.exports = {
    'env': {
        'cypress/globals': true
    },
    'plugins': [
        'cypress',
        'chai-friendly',
        '@typescript-eslint'
    ],
    'extends': [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended'
    ],
    'rules': {
        // Disallow unused variables
        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': 'off',

        // Disallow assigning any to variables and properties
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        '@typescript-eslint/no-unsafe-assignment': 'off',

        // Disallow calling an any type value
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        '@typescript-eslint/no-unsafe-call': 'off',

        // Disallow member access on any typed variables
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        '@typescript-eslint/no-unsafe-member-access': 'off',

        // Enforce template literal expressions to be of string type
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
        '@typescript-eslint/restrict-template-expressions': 'off'
    }
};
