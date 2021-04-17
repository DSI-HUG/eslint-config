'use strict';

module.exports = {
    "extends": "./recommended",
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "excludedFiles": "*.spec.ts",
            "extends": [
                require.resolve("./rules/typescript/strict"),
                require.resolve("./rules/angular/strict"),
                require.resolve("./rules/rxjs/strict")
            ]
        }
    ]
};