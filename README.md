# fastify-favicon

[![Build and Test](https://github.com/sjinks/fastify-favicon/actions/workflows/build.yml/badge.svg)](https://github.com/sjinks/fastify-favicon/actions/workflows/build.yml)
[![CodeQL Analysis](https://github.com/sjinks/fastify-favicon/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sjinks/fastify-favicon/actions/workflows/codeql-analysis.yml)
[![Package Audit](https://github.com/sjinks/fastify-favicon/actions/workflows/package-audit.yml/badge.svg)](https://github.com/sjinks/fastify-favicon/actions/workflows/package-audit.yml)

A plugin for [Fastify](https://github.com/fastify/fastify) to eliminate exceptions on requests to `/favicon.ico`.

## Installation

```sh
npm install --save-dev @wwa/fastify-favicon
```

## Usage

```js
const fastify = require('fastify')();
fastify.register(require('@wwa/fastify-favicon'));

fastify.listen(3000);
```

Requests to `/favicon.ico` will return a 16x16 black icon.
