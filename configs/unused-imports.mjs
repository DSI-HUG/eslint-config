import unusedImportsPlugin from 'eslint-plugin-unused-imports';

/** @type {(files?: Array<string | string[]>) => import('eslint').Linter.Config} */
export default files => ({
    name: 'hug/defaults/unused-imports',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'unused-imports': unusedImportsPlugin
    },
    rules: {
        // Find and remove unused es6 module imports
        // https://github.com/sweepline/eslint-plugin-unused-imports
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ]
    }
});
