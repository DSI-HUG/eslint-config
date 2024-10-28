import noLoopsPlugin from 'eslint-plugin-no-loops';

/** @type {(files?: Array<string | string[]>) => import('eslint').Linter.Config} */
export default files => ({
    name: 'hug/defaults/no-loops',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        'no-loops': noLoopsPlugin
    },
    rules: {
        // Disallow use of loops (for, for-in, while, do-while, for-of)
        // https://github.com/buildo/eslint-plugin-no-loops
        'no-loops/no-loops': 'error'
    }
});
