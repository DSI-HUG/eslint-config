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
    <a href="https://david-dm.org/DSI-HUG/eslint-config?type=dev">
        <img src="https://img.shields.io/david/dev/DSI-HUG/eslint-config.svg" alt="devDependency status" />
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


## Usage

```js
// .eslintrc.js
module.exports = {
    "extends": [
        "@hug/eslint-config/recommended"
    ]
};
```


## Rules

This configuration exports a recommended set of rules that enforces good practices.

They may or may not served you well as they are mainly designed to be used by the [HUG organization's team][dsi-hug].

The rules are applied as follow:

| Files | Rules |
| :---- | :---- |
| *.ts | `es6`, `typescript`, `angular` |
| *.html | `angular-template` |
| cypress/**/*.ts | `cypress`, `chai-friendly` |


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




[developer]: https://github.com/DSI-HUG/eslint-config/blob/master/DEVELOPER.md
[contributing]: https://github.com/DSI-HUG/eslint-config/blob/master/CONTRIBUTING.md
[codeofconduct]: https://github.com/DSI-HUG/eslint-config/blob/master/CODE_OF_CONDUCT.md
[dsi-hug]: https://github.com/DSI-HUG
