import preferArrowPlugin from 'eslint-plugin-prefer-arrow';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/prefer-arrow${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        // @ts-expect-error
        'prefer-arrow': preferArrowPlugin,
    },
    rules: rules ?? {
        // Prefer arrow functions
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        'prefer-arrow/prefer-arrow-functions': 'error',
    },
});
