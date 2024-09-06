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
        // https://typescript-eslint.io/rules/no-unsafe-assignment
        '@typescript-eslint/no-unsafe-assignment': 'off',

        // Disallow calling an any type value
        // https://typescript-eslint.io/rules/no-unsafe-call
        '@typescript-eslint/no-unsafe-call': 'off',

        // Disallow member access on any typed variables
        // https://typescript-eslint.io/rules/no-unsafe-member-access
        '@typescript-eslint/no-unsafe-member-access': 'off',

        // Enforce template literal expressions to be of string type
        // https://typescript-eslint.io/rules/restrict-template-expressions
        '@typescript-eslint/restrict-template-expressions': 'off'
    }
};
