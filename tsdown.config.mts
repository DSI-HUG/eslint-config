import { copyFileSync, cpSync, readFileSync, writeFileSync } from 'node:fs';
import { defineConfig, type UserConfig } from 'tsdown';

const config: UserConfig[] = defineConfig([{
    entry: [
        'configs/common/files',
        'configs/angular',
        'configs/base',
        'configs/cypress',
        'configs/eslint',
        'configs/jsdoc',
        'configs/jsonc',
        'configs/no-loops',
        'configs/no-secrets',
        'configs/prefer-arrow',
        'configs/rxjs',
        'configs/rxjsAngular',
        'configs/simple-import-sort',
        'configs/stylistic',
        'configs/typescript',
        'configs/unused-imports',
        'index.ts',
    ],
    format: ['esm'],
    clean: true,
    sourcemap: false,
    dts: {
        sourcemap: false,
    },
    deps: {
        neverBundle: '@eslint/core',
    },
    onSuccess: (): void => {
        const pkgJson = JSON.parse(readFileSync('package.json', 'utf8')) as Record<string, unknown>;
        const postinstall = (pkgJson['scripts'] as Record<string, string> | undefined)?.['postinstall'];
        if (postinstall) {
            pkgJson['scripts'] = { postinstall };
        } else {
            delete pkgJson['scripts'];
        }
        delete pkgJson['publishConfig'];
        delete pkgJson['devDependencies'];
        writeFileSync('dist/package.json', JSON.stringify(pkgJson, null, 4));

        cpSync('scripts/', 'dist/scripts/', { recursive: true });
        copyFileSync('README.md', 'dist/README.md');
        copyFileSync('LICENSE', 'dist/LICENSE');
    },
}]);

export default config;
