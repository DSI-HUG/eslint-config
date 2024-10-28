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
yarn add eslint@8.x @hug/eslint-config --dev
```

<details>
    <summary><i>Prior to version 20.2.0</i></summary>

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

<hr/>

## Requirements

> As of now this configuration is intented to work with **Angular projects** only.

> Projects running under `Angular 10.x` can safely ignore `@angular-eslint` warnings during installation.

-   an **Angular >= 10.x** project

## Usage

1. Create an `.eslintrc.json` file at the root of your project

```jsonc
{
    "root": true,
    "extends": [
        /**
         *  Possible values: 'recommended (strict) | moderate (less stricter)'
         */
        "@hug/eslint-config/recommended"
    ]
}
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

_You can also skip steps `2` and `3` and simply run:_

```
eslint *.{js,json,ts,html}
```

## Rules

This configuration exports a recommended set of rules that enforces good practices.

They may or may not served you well as they are mainly designed to be used by the [HUG organization's team][dsi-hug].

The rules applies as follow:

| Files        | Rules                                                                                           |
| :----------- | :---------------------------------------------------------------------------------------------- |
| \*_/_.ts     | `es6`, `typescript`, `angular`, `rxjs`, `no-secrets`                                            |
| \*_/_.js     | `es6`, `no-secrets`                                                                             |
| \*_/_.mjs    | `es6`, `no-secrets`                                                                             |
| \*_/_.html   | `angular-template`                                                                              |
| \*_/_.json   | `no-secrets`                                                                                    |
| e2e/\*_/_.ts | `es6`, `typescript`, `no-secrets`, [`cypress`, `chai-friendly` - in case you are using Cypress] |

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
