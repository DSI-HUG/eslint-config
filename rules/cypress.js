module.exports = {
    "env": {
        "cypress/globals": true
    },
    "plugins": [
        "cypress",
        "chai-friendly"
    ],
    "rules": {
        // Disallow Unused Variables
        // https://eslint.org/docs/rules/no-unused-vars
        "no-unused-vars": "off"
    }
};
