'use strict';

module.exports = {
    "extends": "./recommended",
    "overrides": [
        {
            "files": [
                "**/*.ts"
            ],
            "extends": [
                require.resolve("./rules/angular/recommended-extra")
            ]
        }
    ]
};
