'use strict';

const { equal } = require('node:assert/strict');
const fastify = require('fastify');

it('GET /favicon.ico returns an empty icon', function (done) {
  const app = fastify();
  app.register(require('./index'));

  after(() => app.close());

  app.inject({
    method: 'GET',
    url: '/favicon.ico'
  }, function (err, response) {
    try {
      equal(err, null);
      equal(response.statusCode, 200);
      equal(response.headers['content-type'], 'image/x-icon');
      equal(response.payload.length, 198);
    } finally {
      done();
    }
  });
});
