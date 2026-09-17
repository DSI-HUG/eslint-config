import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import { Files } from './common/files';

const config = defineConfig(
    {
        name: '@hug-eslint-config/globals',
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jasmine,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },
    globalIgnores(Files.IGNORE, '@hug-eslint-config/ignores'),
);

export default config;
