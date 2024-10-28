import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

/** @type {(files?: Array<string | string[]>) => import('eslint').Linter.Config} */
export default files => ({
    name: 'hug/defaults/simple-import-sort',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'simple-import-sort': simpleImportSortPlugin
    },
    rules: {
        // Easy autofixable import sorting
        // https://github.com/lydell/eslint-plugin-simple-import-sort
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
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
});
