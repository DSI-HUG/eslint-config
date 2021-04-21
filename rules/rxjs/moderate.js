module.exports = {
    "plugins": [
        "rxjs-angular"
    ],
    "rules": {
        // Use takeUntil and ngOnDestroy
        // https://github.com/cartant/eslint-plugin-rxjs-angular/blob/main/docs/rules/prefer-takeuntil.md
        "rxjs-angular/prefer-takeuntil": "off"
    }
};