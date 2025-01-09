import noSecretsPlugin from 'eslint-plugin-no-secrets';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/no-secrets${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        // @ts-ignore
        'no-secrets': noSecretsPlugin
    },
    rules: rules ?? {
        // Search for potential secrets/keys in code and JSON files
        // https://github.com/nickdeis/eslint-plugin-no-secrets
        'no-secrets/no-secrets': [
            'error',
            {
                tolerance: 5
            }
        ]
    }
});
