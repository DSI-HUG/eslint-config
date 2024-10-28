import noSecretsPlugin from 'eslint-plugin-no-secrets';

/** @type {(files?: Array<string | string[]>) => import('eslint').Linter.Config} */
export default files => ({
    name: 'hug/defaults/no-secrets',
    ...(files ? { files } : {}), // files cannot be empty nor undefined
    plugins: {
        // @ts-ignore
        'no-secrets': noSecretsPlugin
    },
    rules: {
        // Search for potential secrets/keys in code and JSON files
        // https://github.com/nickdeis/eslint-plugin-no-secrets
        'no-secrets/no-secrets': [
            'error',
            { tolerance: 5 }]
    }
});
