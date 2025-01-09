import jsdocPlugin from 'eslint-plugin-jsdoc';

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @type {Record<'js' | 'ts', (files?: (string | string[])[]) => Config>}
 */
export default {
    js: files => ({
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        ...jsdocPlugin.configs['flat/recommended'],
        name: 'hug/defaults/jsdoc/javascript'
    }),

    ts: files => ({
        ...(files ? { files } : {}), // files cannot be empty nor undefined
        ...jsdocPlugin.configs['flat/recommended-typescript'],
        name: 'hug/defaults/jsdoc/typescript'
    })
};
