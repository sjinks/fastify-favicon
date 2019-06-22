# fastify-favicon

A plugin for [Fastify](https://github.com/fastify/fastify) to eliminate exceptions on requests to `/favicon.ico`.

## Usage

```js
const fastify = require('fastify')();
fastify.register(require('fastify-favicon'));

fastify.listen(3000);
```

Requests to `/favicon.ico` will return a 16x16 black icon.
