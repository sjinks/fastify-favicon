import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fastifyPlugin = require('fastify-plugin');
import { ServerResponse } from 'http';

const ico: string = Buffer.from(
  'AAABAAEAEBACAAEAAQCwAAAAFgAAACgAAAAQAAAAIAAAAAEAAQAAAAAAQAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  'base64'
).toString('binary');

function handler(request: FastifyRequest, response: FastifyReply<ServerResponse>): void {
    response.header('Content-Type', 'image/x-icon');
    response.send(ico);
}

function plugin(fastify: FastifyInstance, options: fastifyPlugin.PluginOptions, next: (err?: Error) => void): void {
    fastify.get('/favicon.ico', handler);
    next();
}

export = fastifyPlugin(plugin, {
    fastify: '3.x'
});
