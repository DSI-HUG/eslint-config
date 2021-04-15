module.exports = {
    "plugins": [
        "@angular-eslint"
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

        // Prefer to declare @Output as readonly since they are not supposed to be reassigned
        // http://codelyzer.com/rules/prefer-output-readonly
        "@angular-eslint/prefer-output-readonly": "error",

        // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
        // http://codelyzer.com/rules/prefer-on-push-component-change-detection
        "@angular-eslint/prefer-on-push-component-change-detection": "error",

        // Component selector must be declared
        // http://codelyzer.com/rules/use-component-selector
        "@angular-eslint/use-component-selector": "error"
    }
};
