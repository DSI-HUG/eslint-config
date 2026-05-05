import { defineConfig, globalIgnores } from 'eslint/config';

import hug from './index';

let hugConfig;

if (process.env['CONFIG'] === 'MODERATE') {
    console.log('Using config "moderate"');
    hugConfig = hug.configs.moderate;
} else {
    console.log('Using config "recommended"');
    hugConfig = hug.configs.recommended;
}

export default defineConfig(
    globalIgnores(['examples/'], 'project/ignores'),
    hugConfig,
    hug.configs.stylistic.recommended,
    hug.configs.angular.accessibility.recommended,
    {
        files: hug.files.TYPESCRIPT,
        name: 'project/typescript/overrides',
        rules: {
            '@typescript-eslint/naming-convention': 'off',
        },
    },
);
