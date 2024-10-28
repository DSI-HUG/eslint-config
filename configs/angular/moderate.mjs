import tsPlugin from 'typescript-eslint';

import recommended from './recommended.mjs';

/** @type {Record<'ts' | 'html', (files?: Array<string | string[]>) => import('eslint').Linter.Config[]>} */
// @ts-ignore
export default {
    ts: files =>
        tsPlugin.config({
            name: 'hug/moderate/angular',
            ...(files ? { files } : {}), // files cannot be empty nor undefined
            extends: [
                ...recommended.ts(files)],
            rules: {
                // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
                // http://codelyzer.com/rules/prefer-on-push-component-change-detection
                '@angular-eslint/prefer-on-push-component-change-detection': 'off'
            }
        }),

    html: files =>
        tsPlugin.config({
            name: 'hug/moderate/angular-html',
            ...(files ? { files } : {}), // files cannot be empty nor undefined
            extends: [
                ...recommended.html(files)]
        })
};
