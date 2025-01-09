import jsoncPlugin from 'eslint-plugin-jsonc';

const base = Object.assign({}, ...jsoncPlugin.configs['flat/base']);

/**
 * @typedef {import('@typescript-eslint/utils').TSESLint.FlatConfig.Rules} Rules
 * @typedef {import('eslint').Linter.Config} Config
 * @type {Record<'json' | 'jsonc' | 'json5', (files?: (string | string[])[], rules?: Rules) => Config>}
 */
export default {
    json: (files, rules) => ({
        name: `hug/defaults/jsonc/json${rules ? ' (overrides)' : ''}`,
        ...base,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        rules: rules ?? {
            ...base.rules,
            ...jsoncPlugin.configs['recommended-with-json'].rules
        }
    }),

    jsonc: (files, rules) => ({
        name: `hug/defaults/jsonc/jsonc${rules ? ' (overrides)' : ''}`,
        ...base,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        rules: rules ?? {
            ...base.rules,
            ...jsoncPlugin.configs['recommended-with-jsonc'].rules
        }
    }),

    json5: (files, rules) => ({
        name: `hug/defaults/jsonc/json5${rules ? ' (overrides)' : ''}`,
        ...base,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        rules: rules ?? {
            ...base.rules,
            ...jsoncPlugin.configs['recommended-with-json5'].rules
        }
    })
};
