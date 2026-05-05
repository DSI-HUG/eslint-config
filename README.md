<h1 align="center">
    @hug/eslint-config
</h1>

<p align="center">
    <br/>
    <a href="https://www.hug.ch">
        <img src="https://cdn.hug.ch/svgs/hug/hug-logo-horizontal.svg" alt="hug-logo" height="54px" />
    </a>
    <br/><br/>
    <i>ESLint shareable configuration with great defaults</i>
    <br/><br/>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@hug/eslint-config">
        <img src="https://img.shields.io/npm/v/@hug/eslint-config.svg?color=blue&logo=npm" alt="npm version" /></a>
    <a href="https://npmcharts.com/compare/@hug/eslint-config?minimal=true">
        <img src="https://img.shields.io/npm/dw/@hug/eslint-config.svg?color=blue&logo=npm" alt="npm donwloads" /></a>
    <a href="https://github.com/dsi-hug/eslint-config/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-GPLv3-ff69b4.svg" alt="license GPLv3" /></a>
</p>

<p align="center">
    <a href="https://github.com/dsi-hug/eslint-config/actions/workflows/ci_tests.yml">
        <img src="https://github.com/dsi-hug/eslint-config/actions/workflows/ci_tests.yml/badge.svg" alt="build status" /></a>
    <a href="https://github.com/dsi-hug/eslint-config/blob/main/CONTRIBUTING.md#-submitting-a-pull-request-pr">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" /></a>
</p>

<hr/>

## Installation

```sh
npm install @hug/eslint-config --save-dev
```

```sh
yarn add eslint @hug/eslint-config --dev
```

See previous installations [section](#previous-installations) for older requirements.

<hr/>

## Usage

1. Create an `eslint.config.ts` file at the root of your project

    #### Example 1: linter + formatter + angular accessibility

    ```mjs
    import { defineConfig } from 'eslint/config';
    import hug from '@hug/eslint-config';

    export default defineConfig(
        hug.configs.recommended, // Linter preset
        hug.configs.stylistic.recommended, // Formatter
        hug.configs.angular.accessibility.recommended, // Angular accessibility
    );
    ```

    #### Example 2: individual configs

    ```mjs
    import { defineConfig } from 'eslint/config';
    import hug from '@hug/eslint-config';

    export default defineConfig(
        hug.configs.eslint.recommended,
        hug.configs.typescript.recommended,
        hug.configs.angular.ts.moderate,
    );
    ```

    #### Example 3: with overrides

    ```mjs
    import { defineConfig, globalIgnores } from 'eslint/config';
    import hug, { Files } from '@hug/eslint-config';

    export default defineConfig(
        // will add new ignored files
        globalIgnores(['examples/'], 'my-project/ignores'),

        // will customize predefined configs
        hug.configs.createRecommended({
            // will disabled the current jsdoc recommended configuration
            jsdoc: false,
            // will override files for the current eslint recommended configuration
            eslint: {
                files: ['src/**/*.mjs'],
            }
            // will add or override rules for the current typescript recommended configuration
            typescript: {
                rules: {
                    '@typescript-eslint/prefer-nullish-coalescing': 'off',
                }
            }
        }),

        // will also add or override rules for the current typescript recommended configuration
        {
            name: 'my-project/typescript/overrides',
            files: Files.TYPESCRIPT, // <- required for the overrides to work
            rules: {
                '@typescript-eslint/method-signature-style': ['error', 'property'],
            }
        }

        // will add a completely new set of rules
        {
            name: 'my-project/e2e',
            files: ['e2e/**/*.ts'],
            plugins: e2ePlugin,
            rules: {
                'e2e-rule': 'error',
            },
        },
    );
    ```

2. Modify your existing `angular.json`

    ```json
    "architect": {
        "lint": {
            "builder": "@angular-eslint/builder:lint",
            "options": {
                "lintFilePatterns": [
                    "**/*.js",
                    "**/*.json",
                    "**/*.ts",
                    "**/*.html"
                ]
            }
        }
    }
    ```

3. Run `ng lint`

<br/>

ℹ️ _You can also skip steps `2` and `3` and simply run:_

```sh
npx eslint *.{js,json,ts,html}
```

## Visual inspector

Eslint has made available a great tool to visually inspect and understand your current configurations.

Go to the project root that contains `eslint.config.js` and run:

```sh
npx @eslint/config-inspector
```

## Configurations

This package exports a set of rules that enforces good practices.

They may or may not served you well as they are mainly designed to be used by the [HUG organization's team][dsi-hug].

The following predefined configurations are available:

| Preset | Description |
| :--- | :--- |
✅ = hug.configs.`recommended` | Strict linter rules. |
☁️ = hug.configs.`moderate` | Less strict linter rules. |

You can also use part of those configurations individually:

| Config | Description | ✅ | ☁️ |
| :--- | :--- | --- | --- |
hug.configs.`stylistic` | Formatting rules. |  |  |
hug.configs.`eslint` | Eslint rules. | ✅ | |
hug.configs.`typescript` | Typescript rules. | ✅ | |
hug.configs.`angular`.ts | Angular rules for typescript files. | ✅ | ☁️ |
hug.configs.`angular`.html | Angular rules for template files. | ✅ | |
hug.configs.`angular`.accessibility | Angular accessibility rules for template files. | | |
hug.configs.`rxjs` | Rxjs rules. | ✅ | ☁️ |
hug.configs.`rxjsAngular` | Rxjs rules specific to Angular. | ✅ | |
hug.configs.`cypress` | Cypress rules. | ✅ | |
hug.configs.`jsdoc`.js | Jsdoc rules for javascript files. | ✅ | |
hug.configs.`jsdoc`.ts | Jsdoc rules for typescript files | ✅ | |
hug.configs.`json` | Rules for json files. | ✅ | |
hug.configs.`jsonc` | Rules for jsonc files.| ✅ | |
hug.configs.`json5` | Rules for json5 files | ✅ | |
hug.configs.`no-loops` | Disallow use of loops. | ✅ | |
hug.configs.`prefer-arrow` | Prefer arrow functions. | ✅ | |
hug.configs.`simple-import-sort` | Easily autofix import sorting. | ✅ | |
hug.configs.`unused-imports` | Find and remove unused imports. | ✅ | |
hug.configs.`no-secrets` | Search for potential secrets/keys in code. | ✅ | |

#### Customization

Each configuration can be customized using its own `create<Name>` property.

Examples:
- hug.configs.`createRecommended(options)`
- hug.configs.`createStylistic(options)`
- hug.configs.typescript.`createRecommended(options)`
- hug.configs.angular.ts.`createModerate(options)`

## Previous installations

<details>
    <summary><i>Prior to version v21.x</i></summary>

> <br/>
>
> Create an `.eslintrc.json` file at the root of your project
>
> ```jsonc
> {
>     "root": true,
>     "extends": [
>         /**
>          *  Possible values: 'recommended (strict) | moderate (less stricter)'
>          */
>         "@hug/eslint-config/recommended"
>     ]
> }
> ```

</details>
<details>
    <summary><i>Prior to version v20.2.0</i></summary>

> <br/>
>
> Create a `tsconfig.eslint.json` file at the root of your project
>
> ```jsonc
> {
>     "extends": "./tsconfig.json",
>     "compilerOptions": {
>         "types": [
>             "node",
>             "jasmine"
>             //
>             // In case you are using WebdriverIO
>             //   "@wdio/globals/types"
>             //
>             // In case you are using Cypress
>             //   "cypress"
>             //
>             // Any other types that are required by your tests
>             //   ...
>         ]
>     },
>     "include": ["src/**/*.ts", "e2e/**/*.ts"]
> }
> ```

</details>
<details>
    <summary><i>For Angular >= 10.x <= 11.x</i></summary>

> <br/>
>
> ```sh
> npm install @hug/eslint-config@2.x --save-dev
> ```
>
> ```sh
> yarn add eslint@7.x @hug/eslint-config@2.x --dev
> ```

</details>
<details>
    <summary><i>Migrating from tslint</i></summary>

> <br/>
>
> 1. Remove `tslint` and `codelyzer` from your dependencies
> 2. Remove any `tslint.json` configuration files
> 3. Add `eslint` as a dev depe<h1 align="center">
    @hug/eslint-config
</h1>

<p align="center">
    <br/>
    <a href="https://www.hug.ch">
        <img src="https://cdn.hug.ch/svgs/hug/hug-logo-horizontal.svg" alt="hug-logo" height="54px" />
    </a>
    <br/><br/>
    <i>ESLint shareable configuration with great defaults</i>
    <br/><br/>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@hug/eslint-config">
        <img src="https://img.shields.io/npm/v/@hug/eslint-config.svg?color=blue&logo=npm" alt="npm version" /></a>
    <a href="https://npmcharts.com/compare/@hug/eslint-config?minimal=true">
        <img src="https://img.shields.io/npm/dw/@hug/eslint-config.svg?color=blue&logo=npm" alt="npm donwloads" /></a>
    <a href="https://github.com/dsi-hug/eslint-config/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-GPLv3-ff69b4.svg" alt="license GPLv3" /></a>
</p>

<p align="center">
    <a href="https://github.com/dsi-hug/eslint-config/actions/workflows/ci_tests.yml">
        <img src="https://github.com/dsi-hug/eslint-config/actions/workflows/ci_tests.yml/badge.svg" alt="build status" /></a>
    <a href="https://github.com/dsi-hug/eslint-config/blob/main/CONTRIBUTING.md#-submitting-a-pull-request-pr">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" /></a>
</p>

<hr/>

## Installation

```sh
npm install @hug/eslint-config --save-dev
```

```sh
yarn add eslint @hug/eslint-config --dev
```

See previous installations [section](#previous-installations) for older requirements.

<hr/>

## Usage

1. Create an `eslint.config.ts` file at the root of your project

    #### Example 1: linter + formatter + angular accessibility

    ```mjs
    import { defineConfig } from 'eslint/config';
    import hug from '@hug/eslint-config';

    export default defineConfig(
        hug.configs.recommended, // Linter preset
        hug.configs.stylistic.recommended, // Formatter
        hug.configs.angular.accessibility.recommended, // Angular accessibility
    );
    ```

    #### Example 2: individual configs

    ```mjs
    import { defineConfig } from 'eslint/config';
    import hug from '@hug/eslint-config';

    export default defineConfig(
        hug.configs.eslint.recommended,
        hug.configs.typescript.recommended,
        hug.configs.angular.ts.moderate,
    );
    ```

    #### Example 3: with overrides

    ```mjs
    import { defineConfig, globalIgnores } from 'eslint/config';
    import hug, { Files } from '@hug/eslint-config';

    export default defineConfig(
        // will add new ignored files
        globalIgnores(['examples/'], 'my-project/ignores'),

        // will customize predefined configs
        hug.configs.createRecommended({
            // will override files for the current angular recommended configuration
            angular: {
                files: ['src/**/*.ts'],
            }
            // will add or override rules for the current typescript recommended configuration
            typescript: {
                rules: {
                    '@typescript-eslint/prefer-nullish-coalescing': 'off',
                }
            }
        }),

        // will also add or override rules for the current typescript recommended configuration
        {
            name: 'my-project/typescript/overrides',
            files: Files.TYPESCRIPT, // <- required for the overrides to work
            rules: {
                '@typescript-eslint/method-signature-style': ['error', 'property'],
            }
        }

        // will add a completely new set of rules
        {
            name: 'my-project/e2e',
            files: ['e2e/**/*.ts'],
            plugins: e2ePlugin,
            rules: {
                'e2e-rule': 'error',
            },
        },
    );
    ```

2. Modify your existing `angular.json`

    ```json
    "architect": {
        "lint": {
            "builder": "@angular-eslint/builder:lint",
            "options": {
                "lintFilePatterns": [
                    "**/*.js",
                    "**/*.json",
                    "**/*.ts",
                    "**/*.html"
                ]
            }
        }
    }
    ```

3. Run `ng lint`

<br/>

ℹ️ _You can also skip steps `2` and `3` and simply run:_

```sh
npx eslint *.{js,json,ts,html}
```

## Visual inspector

Eslint has made available a great tool to visually inspect and understand your current configurations.

Go to the project root that contains `eslint.config.ts` and run:

```sh
npx @eslint/config-inspector
```

## Configurations

This package exports a set of rules that enforces good practices.

They may or may not served you well as they are mainly designed to be used by the [HUG organization's team][dsi-hug].

The following predefined configurations are available:

| Presets | Description |
| :--- | :--- |
| ✅ = hug.configs.`recommended` | Strict linter rules. |
| ☁️ = hug.configs.`moderate` | Less strict linter rules. |

Or you can also use configurations individually:

| Config | Description | ✅ | ☁️ |
| :--- | :--- | --- | --- |
| hug.configs.`stylistic` | Formatting rules. |  |  |
| hug.configs.`eslint` | Eslint rules. | ✅ | |
| hug.configs.`typescript` | Typescript rules | ✅ | |
| hug.configs.`angular`.ts | Angular rules for typescript files. | ✅ | ☁️ |
| hug.configs.`angular`.html | Angular rules for template files. | ✅ | |
| hug.configs.`angular`.accessibility | Angular accessibility rules for template files. | | |
| hug.configs.`rxjs` | Rxjs rules. | ✅ | ☁️ |
| hug.configs.`rxjsAngular` | Rxjs rules specific to Angular. | ✅ | |
| hug.configs.`cypress` | Cypress rules. | ✅ | |
| hug.configs.`jsdoc`.js | Jsdoc rules for javascript files. | ✅ | |
| hug.configs.`jsdoc`.ts | Jsdoc rules for typescript files | ✅ | |
| hug.configs.`json` | Rules for json files. | ✅ | |
| hug.configs.`jsonc` | Rules for jsonc files.| ✅ | |
| hug.configs.`json5` | Rules for json5 files | ✅ | |
| hug.configs.`no-loops` | Disallow use of loops. | ✅ | |
| hug.configs.`prefer-arrow` | Prefer arrow functions. | ✅ | |
| hug.configs.`simple-import-sort` | Easily autofix import sorting. | ✅ | |
| hug.configs.`unused-imports` | Find and remove unused imports. | ✅ | |
| hug.configs.`no-secrets` | Search for potential secrets/keys in code. | ✅ | |

#### Customization

Each configuration can be customized using its own `create<Name>` property.

Examples:
- hug.configs.`createRecommended(options)`
- hug.configs.`createStylistic(options)`
- hug.configs.typescript.`createRecommended(options)`
- hug.configs.angular.ts.`createModerate(options)`

## Previous installations

<details>
    <summary><i>Prior to version v21.x</i></summary>

> <br/>
>
> Create an `.eslintrc.json` file at the root of your project
>
> ```jsonc
> {
>     "root": true,
>     "extends": [
>         /**
>          *  Possible values: 'recommended (strict) | moderate (less stricter)'
>          */
>         "@hug/eslint-config/recommended"
>     ]
> }
> ```

</details>
<details>
    <summary><i>Prior to version v20.2.0</i></summary>

> <br/>
>
> Create a `tsconfig.eslint.json` file at the root of your project
>
> ```jsonc
> {
>     "extends": "./tsconfig.json",
>     "compilerOptions": {
>         "types": [
>             "node",
>             "jasmine"
>             //
>             // In case you are using WebdriverIO
>             //   "@wdio/globals/types"
>             //
>             // In case you are using Cypress
>             //   "cypress"
>             //
>             // Any other types that are required by your tests
>             //   ...
>         ]
>     },
>     "include": ["src/**/*.ts", "e2e/**/*.ts"]
> }
> ```

</details>
<details>
    <summary><i>For Angular >= 10.x <= 11.x</i></summary>

> <br/>
>
> ```sh
> npm install @hug/eslint-config@2.x --save-dev
> ```
>
> ```sh
> yarn add eslint@7.x @hug/eslint-config@2.x --dev
> ```

</details>
<details>
    <summary><i>Migrating from tslint</i></summary>

> <br/>
>
> 1. Remove `tslint` and `codelyzer` from your dependencies
> 2. Remove any `tslint.json` configuration files
> 3. Add `eslint` as a dev dependency
> 4. Have a look at our [Angular project example][ng-example] and modify all your `tsconfig` files accordingly

</details>

## Development

See the [developer docs][developer].

## Contributing

#### > Want to Help?

Want to file a bug, contribute some code or improve documentation? Excellent!

But please read up first on the guidelines for [contributing][contributing], and learn about submission process, coding rules and more.

#### > Code of Conduct

Please read and follow the [Code of Conduct][codeofconduct], and help us keep this project open and inclusive.

## Credits

Copyright (C) 2021 [HUG - Hôpitaux Universitaires Genève][dsi-hug]

[![love@hug](https://img.shields.io/badge/@hug-%E2%9D%A4%EF%B8%8Flove-magenta)][dsi-hug]

[angular-eslint]: https://github.com/angular-eslint/angular-eslint
[ng-example]: https://github.com/dsi-hug/eslint-config/blob/main/examples/angular
[cypress]: https://www.cypress.io/
[developer]: https://github.com/dsi-hug/eslint-config/blob/main/DEVELOPER.md
[contributing]: https://github.com/dsi-hug/eslint-config/blob/main/CONTRIBUTING.md
[codeofconduct]: https://github.com/dsi-hug/eslint-config/blob/main/CODE_OF_CONDUCT.md
[dsi-hug]: https://github.com/dsi-hug
ndency
> 4. Have a look at our [Angular project example][ng-example] and modify all your `tsconfig` files accordingly

</details>

## Development

See the [developer docs][developer].

## Contributing

#### > Want to Help?

Want to file a bug, contribute some code or improve documentation? Excellent!

But please read up first on the guidelines for [contributing][contributing], and learn about submission process, coding rules and more.

#### > Code of Conduct

Please read and follow the [Code of Conduct][codeofconduct], and help us keep this project open and inclusive.

## Credits

Copyright (C) 2021 [HUG - Hôpitaux Universitaires Genève][dsi-hug]

[![love@hug](https://img.shields.io/badge/@hug-%E2%9D%A4%EF%B8%8Flove-magenta)][dsi-hug]

[angular-eslint]: https://github.com/angular-eslint/angular-eslint
[ng-example]: https://github.com/dsi-hug/eslint-config/blob/main/examples/angular
[cypress]: https://www.cypress.io/
[developer]: https://github.com/dsi-hug/eslint-config/blob/main/DEVELOPER.md
[contributing]: https://github.com/dsi-hug/eslint-config/blob/main/CONTRIBUTING.md
[codeofconduct]: https://github.com/dsi-hug/eslint-config/blob/main/CODE_OF_CONDUCT.md
[dsi-hug]: https://github.com/dsi-hug
