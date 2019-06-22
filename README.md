# fastify-favicon

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/badges/build.png?b=master)](https://scrutinizer-ci.com/g/sjinks/fastify-favicon/build-status/master)

A plugin for [Fastify](https://github.com/fastify/fastify) to eliminate exceptions on requests to `/favicon.ico`.

## Usage

```js
const fastify = require('fastify')();
fastify.register(require('fastify-favicon'));

fastify.listen(3000);
```

Requests to `/favicon.ico` will return a 16x16 black icon.
