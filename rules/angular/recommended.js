module.exports = {
    "plugins": [
        "@angular-eslint"
    ],
    "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
    ],
    "rules": {
        // Disallow having too many lines in inline template and styles
        // http://codelyzer.com/rules/component-max-inline-declarations
        "@angular-eslint/component-max-inline-declarations": [
            "error",
            {
                "template": 3,
                "styles": 3,
                "animations": 30
            }
        ],

        // Component selectors should follow given naming rules
        // http://codelyzer.com/rules/component-selector
        "@angular-eslint/component-selector": [
            "error",
            {
                "type": "element",
                "prefix": "",
                "style": "kebab-case"
            }
        ],

        // Ensure that classes use contextual decorators in its body
        // http://codelyzer.com/rules/contextual-decorator
        "@angular-eslint/contextual-decorator": "error",

        // Directive selectors should follow given naming rules
        // http://codelyzer.com/rules/directive-selector
        "@angular-eslint/directive-selector": [
            "error",
            {
                "type": "attribute",
                "prefix": "",
                "style": "camelCase"
            }
        ],

        // Disallow the declaration of impure pipes
        // http://codelyzer.com/rules/no-pipe-impure
        "@angular-eslint/no-pipe-impure": "error",

        // Prefer to declare @Output as readonly since they are not supposed to be reassigned
        // http://codelyzer.com/rules/prefer-output-readonly
        "@angular-eslint/prefer-output-readonly": "error",

        // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
        // http://codelyzer.com/rules/prefer-on-push-component-change-detection
        "@angular-eslint/prefer-on-push-component-change-detection": "error",

        // The ./ prefix is standard syntax for relative URLs; don’t depend on Angular’s current ability to do without that prefix
        // http://codelyzer.com/rules/relative-url-prefix
        "@angular-eslint/relative-url-prefix": "error",

        /**
         * TODO: wait for https://github.com/angular-eslint/angular-eslint/issues/406
         */
        // Enforce sorting of values within NgModule metadata arrays
        // https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-ngmodule-metadata-arrays.md
        // "@angular-eslint/sort-ngmodule-metadata-arrays": "error",

        // Component selector must be declared
        // http://codelyzer.com/rules/use-component-selector
        "@angular-eslint/use-component-selector": "error"
    }
};
