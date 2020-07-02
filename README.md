# fastify-favicon

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/badges/build.png?b=master)](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/build-status/master)
![Build and Test CI](https://github.com/sjinks/fastify-favicon/workflows/Build%20and%20Test%20CI/badge.svg)

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
