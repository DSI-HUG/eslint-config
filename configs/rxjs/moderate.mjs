import recommended from './recommended.mjs';

/** @type {Record<'ts' | 'angular', (files?: Array<string | string[]>) => import('eslint').Linter.Config>} */
export default {
    ts: files => ({
        ...recommended.ts(files),
        name: 'hug/moderate/rxjs.ts'
    }),

    angular: files => ({
        ...recommended.angular(files),
        name: 'hug/moderate/rxjs-angular',
        rules: {
            ...recommended.angular(files).rules,

            // Use takeUntil and ngOnDestroy
            // https://github.com/cartant/eslint-plugin-rxjs-angular/blob/main/docs/rules/prefer-takeuntil.md
            'rxjs-angular/prefer-takeuntil': 'off'
        }
    })
};
