import prettierPlugin from 'eslint-config-prettier';

/** @type {(files?: Array<string | string[]>) => import('eslint').Linter.Config} */
export default files => ({
    name: 'hug/defaults/prettier',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    ...prettierPlugin
});
