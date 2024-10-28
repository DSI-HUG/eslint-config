import angularPlugin from 'angular-eslint';
import tsPlugin from 'typescript-eslint';

/** @type {Record<'ts' | 'html', (files?: Array<string | string[]>) => import('eslint').Linter.Config[]>} */
// @ts-ignore
export default {
    ts: files =>
        tsPlugin.config({
            name: 'hug/recommended/angular',
            ...(files ? { files } : {}), // files cannot be empty nor undefined
            extends: [
                ...angularPlugin.configs.tsRecommended
            ],
            processor: angularPlugin.processInlineTemplates,
            rules: {
                // Enforce components to have a specified suffix
                // https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md
                '@angular-eslint/component-class-suffix': [
                    'error',
                    {
                        suffixes: [
                            'Component',
                            'Page'
                        ]
                    }
                ],

                // Disallow having too many lines in inline template and styles
                // http://codelyzer.com/rules/component-max-inline-declarations
                '@angular-eslint/component-max-inline-declarations': [
                    'error',
                    {
                        template: 3,
                        styles: 3,
                        animations: 30
                    }
                ],

                // Component selectors should follow given naming rules
                // http://codelyzer.com/rules/component-selector
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: '',
                        style: 'kebab-case'
                    }
                ],

                // Ensure that classes use contextual decorators in its body
                // http://codelyzer.com/rules/contextual-decorator
                '@angular-eslint/contextual-decorator': 'error',

                // Directive selectors should follow given naming rules
                // http://codelyzer.com/rules/directive-selector
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: '',
                        style: 'camelCase'
                    }
                ],

                // Disallow the declaration of impure pipes
                // http://codelyzer.com/rules/no-pipe-impure
                '@angular-eslint/no-pipe-impure': 'error',

                // Prefer to declare @Output as readonly since they are not supposed to be reassigned
                // http://codelyzer.com/rules/prefer-output-readonly
                '@angular-eslint/prefer-output-readonly': 'error',

                // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
                // http://codelyzer.com/rules/prefer-on-push-component-change-detection
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',

                // The ./ prefix is standard syntax for relative URLs; don’t depend on Angular’s current ability to do without that prefix
                // http://codelyzer.com/rules/relative-url-prefix
                '@angular-eslint/relative-url-prefix': 'error',

                // Component selector must be declared
                // http://codelyzer.com/rules/use-component-selector
                '@angular-eslint/use-component-selector': 'error'
            }
        }),

    html: files =>
        tsPlugin.config({
            name: 'hug/recommended/angular-html',
            ...(files ? { files } : {}), // files cannot be empty nor undefined
            extends: [
                ...angularPlugin.configs.templateRecommended,
                ...angularPlugin.configs.templateAccessibility
            ],
            rules: {
                // The condition complexity shouldn’t exceed a rational limit in a template
                // http://codelyzer.com/rules/template-conditional-complexity
                '@angular-eslint/template/conditional-complexity': 'error',

                // Disallow using ‘$any’ in templates.
                // http://codelyzer.com/rules/template-no-any
                '@angular-eslint/template/no-any': 'error'
            }
        })
};
