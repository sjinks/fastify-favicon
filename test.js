'use strict';

const tap = require('tap');

tap.test('GET /favicon.ico returns an empty icon', function (t) {
  t.plan(4);

  const fastify = require('fastify')();
  fastify.register(require('./index'));

  t.tearDown(function (t) {
    fastify.close();
  });

  fastify.inject({
    method: 'GET',
    url: '/favicon.ico'
  }, function (err, response) {
    t.error(err);
    t.strictEqual(response.statusCode, 200);
    t.strictEqual(response.headers['content-type'], 'image/x-icon');
    t.strictEqual(response.payload.length, 198);
  });
});
