module.exports = {
    'plugins': [
        'deprecation',
        'no-loops',
        'no-secrets',
        'prefer-arrow',
        'simple-import-sort'
    ],
    'rules': {
        // Report usage of deprecated code
        // https://github.com/gund/eslint-plugin-deprecation
        'deprecation/deprecation': 'warn',

        // Disallow use of loops (for, for-in, while, do-while, for-of)
        // https://github.com/buildo/eslint-plugin-no-loops
        'no-loops/no-loops': 'error',

        // Search for potential secrets/keys in code and JSON files
        // https://github.com/nickdeis/eslint-plugin-no-secrets
        'no-secrets/no-secrets': [
            'error',
            {
                'tolerance': 5
            }
        ],

        // Prefer arrow functions
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        'prefer-arrow/prefer-arrow-functions': 'error',

        // Easy autofixable import sorting
        // https://github.com/lydell/eslint-plugin-simple-import-sort
        'simple-import-sort/imports': [
            'error',
            {
                'groups': [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Packages.
                    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    ['^@?\\w'],
                    //
                    ['^[^(\\.|src/)]'],
                    //
                    ['^src/'],
                    // Relative imports.
                    // Anything that starts with a dot.
                    ['^\\.']
                ]
            }
        ]
    }
};
