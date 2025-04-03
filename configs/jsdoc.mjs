import jsdocPlugin from 'eslint-plugin-jsdoc';

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {Record<'js' | 'ts', (files?: (string | string[])[], rules?: Rules) => Config>}
 */
export default {
    js: (files, rules) => ({
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        ...jsdocPlugin.configs['flat/recommended'],
        ...(rules ? { rules } : {}),
        name: `hug/defaults/jsdoc/javascript${rules ? ' (overrides)' : ''}` // keep last to override jsdocPlugin's name
    }),

    ts: (files, rules) => ({
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        ...jsdocPlugin.configs['flat/recommended-typescript'],
        ...(rules ? { rules } : {}),
        name: `hug/defaults/jsdoc/typescript${rules ? ' (overrides)' : ''}` // keep last to override jsdocPlugin's name
    })
};
