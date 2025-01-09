import noLoopsPlugin from 'eslint-plugin-no-loops';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/no-loops${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'no-loops': noLoopsPlugin
    },
    rules: rules ?? {
        // Disallow use of loops (for, for-in, while, do-while, for-of)
        // https://github.com/buildo/eslint-plugin-no-loops
        'no-loops/no-loops': 'error'
    }
});
