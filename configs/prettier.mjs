import prettierPlugin from 'eslint-config-prettier/flat';

/**
 * @typedef {import('eslint').Linter.Config} Config
 * @type {(files?: (string | string[])[],) => Config}
 */
export default files => ({
    name: 'hug/defaults/prettier',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    ...prettierPlugin
});
