import jsoncPlugin from 'eslint-plugin-jsonc';

const base = Object.assign({}, ...jsoncPlugin.configs['flat/base']);

/** @type {Record<'json' | 'jsonc' | 'json5', (files?: Array<string | string[]>) => import('eslint').Linter.Config>} */
export default {
    json: files => ({
        name: 'hug/defaults/jsonc/json',
        ...base,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        rules: {
            ...base.rules,
            ...jsoncPlugin.configs['recommended-with-json'].rules
        }
    }),

    jsonc: files => ({
        name: 'hug/defaults/jsonc/jsonc',
        ...base,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        rules: {
            ...base.rules,
            ...jsoncPlugin.configs['recommended-with-jsonc'].rules
        }
    }),

    json5: files => ({
        name: 'hug/defaults/jsonc/json5',
        ...base,
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        rules: {
            ...base.rules,
            ...jsoncPlugin.configs['recommended-with-json5'].rules
        }
    })
};
