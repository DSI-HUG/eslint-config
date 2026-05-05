/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'eslint-plugin-chai-friendly' {
    import type { ESLint, Linter } from 'eslint';

    type ChaiFriendlyPlugin = Omit<ESLint.Plugin, 'configs'> & {
        configs: Record<'recommendedFlat', Linter.Config>;
    };

    const plugin: ChaiFriendlyPlugin;
    export default plugin;
}

declare module 'eslint-plugin-no-loops' {
    const plugin: import('eslint').ESLint.Plugin;
    export default plugin;
}

declare module 'eslint-plugin-prefer-arrow' {
    const plugin: import('eslint').ESLint.Plugin;
    export default plugin;
}
