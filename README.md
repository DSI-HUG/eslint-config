<h1 align="center">
    @hug/eslint-config
</h1>

<p align="center">
    <br>
    <a href="https://www.hug.ch/">
        <img src="https://www.hug.ch/sites/all/themes/interhug/img/logos/logo-hug.svg" alt="hug-logo" height="54px" />
    </a>
    <br><br>
    <i>ESLint shareable configuration with great defaults</i>
    <br><br>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@hug/eslint-config">
        <img src="https://img.shields.io/npm/v/@hug/eslint-config.svg?color=blue&logo=npm" alt="npm version" />
    </a>
    <a href="https://npmcharts.com/compare/@hug/eslint-config?minimal=true">
        <img src="https://img.shields.io/npm/dw/@hug/eslint-config.svg?color=blue&logo=npm" alt="npm donwloads" />
    </a>
    <a href="https://github.com/DSI-HUG/eslint-config/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-GPLv3-ff69b4.svg" alt="license GPLv3" />
    </a>
</p>

<p align="center">
    <a href="https://david-dm.org/DSI-HUG/eslint-config">
        <img src="https://img.shields.io/david/DSI-HUG/eslint-config.svg" alt="dependency status" />
    </a>
    <a href="https://github.com/DSI-HUG/eslint-config/blob/master/CONTRIBUTING.md#-submitting-a-pull-request-pr">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
    </a>
</p>

<hr>

## Installation

```sh
$ npm install @hug/eslint-config --save-dev
```

```sh
$ yarn add @hug/eslint-config --dev
```


## Requirements

> As of now this configuration is intented to work with **Angular projects** only.

> Projects running under `Angular 10.x` should use `@hug/eslint-config@1.1.0`.

An **Angular >= 10.x** project with:

* `eslint` installed *(see the [migration guide](#tslint-migration) for projects that are still using `tslint`)*
* [cypress][cypress] [optional] *(for friendly linting against end-to-end tests)*


## Usage

1. Create a `tsconfig.eslint.json` file at the root of your project

```json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "types": [
            "jasmine",
            "cypress",
            "node"
        ]
    },
    "include": [
        "src/**/*.ts",
        "e2e/**/*.ts"
    ]
}
```

2. Create a `.eslintrc.json` file at the root of your project

```json
{
    "root": true,
    "extends": [
        "@hug/eslint-config/recommended"
    ]
}
```

3. Modify your existing `angular.json`

```json
"architect": {
    "lint": {
        "builder": "@angular-eslint/builder:lint",
        "options": {
            "lintFilePatterns": [
                "src/**/*.ts",
                "src/**/*.html",
                "e2e/**/*.ts"
            ]
        }
    }
}
```

4. Run `ng lint`


## Rules

This configuration exports a recommended set of rules that enforces good practices.

They may or may not served you well as they are mainly designed to be used by the [HUG organization's team][dsi-hug].

The rules applies as follow:

| Files | Rules |
| :---- | :---- |
| src/**/*.ts | `es6`, `typescript`, `angular`, `rxjs` |
| src/**/*.html | `angular-template` |
| e2e/**/*.ts | `es6`, `typescript`, `cypress`, `chai-friendly` |

> ***Tip***: a less stricter set of rules can be used with `@hug/eslint-config/moderate`.


## <a name="tslint-migration"></a> Migrating from tslint

1. Remove `tslint` and `codelyzer` from your dependencies

2. Remove any `tslint.json` configuration files

3. Add `eslint` as dev dependency

4. Have a look at our [Angular project example][ng-example] and modify all your `tsconfig` files accordingly


## Development

See the [developer docs][developer].


## Contributing

### Want to Help?

Want to file a bug, contribute some code or improve documentation? Excellent!

But please read up first on the guidelines for [contributing][contributing], and learn about submission process, coding rules and more.

### Code of Conduct

Please read and follow the [Code of Conduct][codeofconduct], and help us keep this project open and inclusive.


## Credits

[![love@hug](https://img.shields.io/badge/@hug-%E2%9D%A4%EF%B8%8Flove-magenta)][dsi-hug]




[angular-eslint]: https://github.com/angular-eslint/angular-eslint
[ng-example]: https://github.com/DSI-HUG/eslint-config/blob/master/examples/angular
[cypress]: https://www.cypress.io/
[developer]: https://github.com/DSI-HUG/eslint-config/blob/master/DEVELOPER.md
[contributing]: https://github.com/DSI-HUG/eslint-config/blob/master/CONTRIBUTING.md
[codeofconduct]: https://github.com/DSI-HUG/eslint-config/blob/master/CODE_OF_CONDUCT.md
[dsi-hug]: https://github.com/DSI-HUG
