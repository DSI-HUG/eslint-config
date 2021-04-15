module.exports = {
    "plugins": [
        "no-loops",
        "prefer-arrow",
        "simple-import-sort"
    ],
    "rules": {
        // Disallow use of loops (for, for-in, while, do-while, for-of)
        // https://github.com/buildo/eslint-plugin-no-loops
        "no-loops/no-loops": "error",

        // Prefer arrow functions
        // https://github.com/TristonJ/eslint-plugin-prefer-arrow
        "prefer-arrow/prefer-arrow-functions": "error",

        // Easy autofixable import sorting
        // https://github.com/lydell/eslint-plugin-simple-import-sort
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    ["^\\u0000"],
                    ["^@?\\w"],
                    ["^[^(\\.|src/)]"],
                    ["^src/"],
                    ["^\\."]
                ]
            }
        ]
    }
};
