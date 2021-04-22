module.exports = {
    "plugins": [
        "@angular-eslint/template"
    ],
    "extends": [
        "plugin:@angular-eslint/template/recommended"
    ],
    "rules": {
        // The condition complexity shouldn’t exceed a rational limit in a template
        // http://codelyzer.com/rules/template-conditional-complexity
        "@angular-eslint/template/conditional-complexity": "error",

        // Disallow using ‘$any’ in templates.
        // http://codelyzer.com/rules/template-no-any
        "@angular-eslint/template/no-any": "error"
    }
};
