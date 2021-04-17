module.exports = {
    "plugins": [
        "@angular-eslint"
    ],
    "rules": {
        // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
        // http://codelyzer.com/rules/prefer-on-push-component-change-detection
        "@angular-eslint/prefer-on-push-component-change-detection": "error"
    }
};
