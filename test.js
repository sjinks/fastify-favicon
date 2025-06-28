'use strict';

const assert = require('node:assert');
const { equal } = require('node:assert/strict');
const { after, it } = require('node:test');
const fastify = require('fastify');

it('GET /favicon.ico returns an empty icon', function (_, done) {
  const app = fastify();
  app.register(require('./index'));

  after(() => app.close());

  app.inject({
    method: 'GET',
    url: '/favicon.ico'
  }, function (err, response) {
    try {
      equal(err, null);
      assert(response !== undefined);
      equal(response.statusCode, 200);
      equal(response.headers['content-type'], 'image/x-icon');
      equal(response.payload.length, 198);
    } finally {
      done();
    }
  });
});
