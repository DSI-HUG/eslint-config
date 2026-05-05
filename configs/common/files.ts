export const Files = {
    ANGULAR_TS: ['**/*.ts'],
    ANGULAR_HTML: ['**/*.html'],
    CYPRESS: ['e2e/**/*.{ts,cts,mts}'],
    ESLINT: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
    JSDOC_JS: ['**/*.{js,cjs,mjs}'],
    JSDOC_TS: ['**/*.{ts,cts,mts}'],
    JSON: ['**/*.json'],
    JSONC: ['**/*.jsonc'],
    JSON5: ['**/*.json5'],
    NO_LOOPS: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
    PREFER_ARROW: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
    RXJS: ['**/*.{ts,cts,mts}'],
    RXJS_ANGULAR: ['**/*.ts'],
    SIMPLE_IMPORT_SORT: ['**/*.{mjs,ts,mts}'],
    STYLISTIC: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
    TYPESCRIPT: ['**/*.{ts,cts,mts}'],
    UNUSED_IMPORTS: ['**/*.{mjs,ts,mts}'],
    IGNORE: [
        // Compiled output
        '**/dist/',
        '**/tmp/',

        // Node
        '**/node_modules/',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/npm-debug.log',
        '**/yarn-error.log',

        // IDEs and editors
        '**/.vscode/',
        '**/.idea/',
        '**/.project/',
        '**/.classpath/',
        '**/.settings/',
        '**/*.launch',
        '**/.c9/',
        '**/*.sublime-workspace',

        // Miscellaneous
        '**/.git/',
        '**/.angular/',
        '**/.sass-cache/',
        '**/.nx',
        '**/.docusaurus',

        // System files
        '**/.DS_Store',
        '**/Thumbs.db',

        // Capacitor/Cordova
        '**/android/',
        '**/ios/',
    ],
};
