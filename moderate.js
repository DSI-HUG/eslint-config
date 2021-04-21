'use strict';

module.exports = {
    "extends": "./recommended",
    "overrides": [
        {
            "files": [
                "**/*.ts"
            ],
            "extends": [
                require.resolve("./rules/typescript/moderate"),
                require.resolve("./rules/angular/moderate"),
                require.resolve("./rules/rxjs/moderate")
            ]
        }
    ]
};
