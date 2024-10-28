# Development

This document describes how you can test and publish this project.

## Prerequisite

Before you can start you must install and configure the following products on your development machine:

-   [Node.js][nodejs]
-   [Git][git]

You will then need to clone this project and install the required dependencies:

```sh
git clone <repository_url> <dir_name>
cd <dir_name>
npm install
```

## Unit testing

Ensure that each unit of the library performs as expected.

```sh
npm run test
```

## Publishing to NPM repository

This project comes with automatic continuous delivery (CD) using _GitHub Actions_.

1. Bump the library version in `./package.json`
2. Push the changes
3. Create a new [GitHub release](https://github.com/dsi-hug/eslint-config/releases/new)
4. Watch the results in: [Actions](https://github.com/dsi-hug/eslint-config/actions)

[git]: https://git-scm.com/
[nodejs]: https://nodejs.org/
