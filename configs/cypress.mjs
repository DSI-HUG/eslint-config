// @ts-ignore
import chaiFriendlyPlugin from 'eslint-plugin-chai-friendly';
import cypressPlugin from 'eslint-plugin-cypress';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[], rules?: Rules) => Config}
 */
export default (files, rules) => ({
    name: `hug/defaults/cypress${rules ? ' (overrides)' : ''}`,
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        cypress: cypressPlugin,
        // @ts-ignore
        'chai-friendly': chaiFriendlyPlugin
    },
    languageOptions: cypressPlugin.configs.globals.languageOptions,
    rules: rules ?? {
        ...cypressPlugin.configs.recommended.rules,
        ...chaiFriendlyPlugin.configs.recommendedFlat.rules,

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
        '@typescript-eslint/no-unsafe-member-access': 'off'
    }
});
