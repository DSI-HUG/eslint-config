import preferArrowPlugin from 'eslint-plugin-prefer-arrow';

/** @type {(files?: Array<string | string[]>) => import('eslint').Linter.Config} */
export default files => ({
    name: 'hug/defaults/prefer-arrow',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        // @ts-ignore
        'prefer-arrow': preferArrowPlugin
    },
    rules: {
        // Prefer arrow functions
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        'prefer-arrow/prefer-arrow-functions': 'error'
    }
});
