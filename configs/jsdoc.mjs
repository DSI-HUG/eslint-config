import jsdocPlugin from 'eslint-plugin-jsdoc';

/** @type {Record<'js' | 'ts', (files?: Array<string | string[]>) => import('eslint').Linter.Config>} */
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
