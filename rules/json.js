module.exports = {
    'plugins': [
        'jsonc',
        'no-secrets'
    ],
    'extends': [
        'plugin:jsonc/base'
    ],
    'rules': {
        // Search for potential secrets/keys in code and JSON files
        // https://github.com/nickdeis/eslint-plugin-no-secrets
        'no-secrets/no-secrets': [
            'error',
            {
                'tolerance': 5
            }
        ]
    }
};
