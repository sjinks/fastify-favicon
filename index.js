'use strict';

const fp = require('fastify-plugin');

const ico = Buffer.from(
  'AAABAAEAEBACAAEAAQCwAAAAFgAAACgAAAAQAAAAIAAAAAEAAQAAAAAAQAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  'base64'
).toString('binary');

function handler (request, response) {
  response.header('Content-Type', 'image/x-icon');
  response.send(ico);
}

function plugin (fastify, options, next) {
  fastify.get('/favicon.ico', handler);
  next();
}

module.exports = fp(plugin, {
  fastify: '3.x'
});
