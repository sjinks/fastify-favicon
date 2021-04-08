'use strict';

const tap = require('tap');

tap.test('GET /favicon.ico returns an empty icon', function (t) {
  t.plan(4);

  const fastify = require('fastify')();
  fastify.register(require('./index'));

  t.teardown(function (/* t */) {
    fastify.close();
  });

  fastify.inject({
    method: 'GET',
    url: '/favicon.ico'
  }, function (err, response) {
    t.error(err);
    t.equal(response.statusCode, 200);
    t.equal(response.headers['content-type'], 'image/x-icon');
    t.equal(response.payload.length, 198);
  });
});
