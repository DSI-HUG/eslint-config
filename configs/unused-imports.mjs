import unusedImportsPlugin from 'eslint-plugin-unused-imports';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/unused-imports${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'unused-imports': unusedImportsPlugin
    },
    rules: rules ?? {
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
