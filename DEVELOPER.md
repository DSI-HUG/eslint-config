# Development

This document describes how you can test and publish this project.

## Prerequisite

Before you can start you must install and configure the following products on your development machine:

* [Git][git]
* [Node.js][nodejs]

You will then need to clone this project and install the required dependencies:

```sh
git clone <repository_url> <dir_name>
cd <dir_name>
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
