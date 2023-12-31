'use strict';

const fp = require('fastify-plugin');

const ico = Buffer.from(
  'AAABAAEAEBACAAEAAQCwAAAAFgAAACgAAAAQAAAAIAAAAAEAAQAAAAAAQAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  'base64'
).toString('binary');

/**
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} response
 */
function handler (request, response) {
  response.header('Content-Type', 'image/x-icon');
  response.send(ico);
}

/**
 * @param {import('fastify').FastifyInstance} fastify
 * @param {import('fastify').FastifyPluginOptions} options
 * @param {(err?: Error) => void} next
 */
function plugin (fastify, options, next) {
  fastify.get('/favicon.ico', handler);
  next();
}

module.exports = fp(plugin, {
  fastify: '2.x || 3.x || 4.x'
});
