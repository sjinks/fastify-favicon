'use strict';

const { expect } = require('chai');
const fastify = require('fastify');

it('GET /favicon.ico returns an empty icon', function (done) {
  const app = fastify();
  app.register(require('./index'));

  after(() => {
    app.close();
  })

  app.inject({
    method: 'GET',
    url: '/favicon.ico'
  }, function (err, response) {
    try {
      expect(err).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.equal('image/x-icon');
      expect(response.payload.length).to.equal(198);
    } finally {
      done();
    }
  });
});
