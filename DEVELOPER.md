# Development

This document describes how you can test, build and publish the library.

## Prerequisite

Before you can build and test this library you must install and configure the following products on your development machine:

* [Git][git]
* [Node.js][nodejs]

You will then need to install the required dependencies:

```sh
cd <library-path>
npm install
```

## Unit testing

Unit tests can be executed with the following command:

```sh
npm run test
```

## Publishing the library to NPM repository

This project comes with automatic continuous delivery (CD) using *GitHub Actions*.

1. Bump the library version in `./package.json`
2. Push the changes
3. Create a new: [GitHub release](https://github.com/dsi-hug/eslint-config/releases/new)
4. Watch the results in: [Actions](https://github.com/dsi-hug/eslint-config/actions)



[git]: https://git-scm.com/
[nodejs]: https://nodejs.org/
