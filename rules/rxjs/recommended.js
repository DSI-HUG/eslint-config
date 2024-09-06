module.exports = {
    'plugins': [
        'rxjs',
        'rxjs-angular'
    ],
    'rules': {
        // Use Finnish notation
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/finnish.md
        'rxjs/finnish': [
            'error',
            {
                'names': {
                    '^(params|queryParams|stateChanges|canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false
                }
            }
        ],

        // Avoid unbounded replay buffers
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-ignored-replay-buffer.md
        'rxjs/no-ignored-replay-buffer': 'error',

        // Use returned observables
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-ignored-observable.md
        'rxjs/no-ignored-observable': 'error',

        // Avoid nested subscribe calls
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-nested-subscribe.md
        'rxjs/no-nested-subscribe': 'error',

        // Avoid using unbound methods as callbacks
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-unbound-methods.md
        'rxjs/no-unbound-methods': 'error',

        // Avoid takeUntil subscription leaks
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-unsafe-takeuntil.md
        'rxjs/no-unsafe-takeuntil': 'error',

        // Avoid using a behavior subject's value
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-subject-value.md
        'rxjs/no-subject-value': 'error',

        // Avoid passing undefined to next
        // https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-unsafe-subject-next.md
        'rxjs/no-unsafe-subject-next': 'error',

        // Use takeUntil and ngOnDestroy
        // https://github.com/cartant/eslint-plugin-rxjs-angular/blob/main/docs/rules/prefer-takeuntil.md
        'rxjs-angular/prefer-takeuntil': [
            'error',
            {
                'alias': [
                    'takeUntilDestroyed'
                ],
                'checkDecorators': [
                    'Component',
                    'Directive',
                    'Pipe',
                    'Service'
                ],
                'checkComplete': false, // Until https://github.com/cartant/eslint-plugin-rxjs-angular/issues/16 is implemented
                'checkDestroy': false
            }
        ]
    }
};
