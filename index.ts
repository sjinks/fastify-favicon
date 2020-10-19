import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

const ico: string = Buffer.from(
  'AAABAAEAEBACAAEAAQCwAAAAFgAAACgAAAAQAAAAIAAAAAEAAQAAAAAAQAAAAAAAAAAAAAAAAgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  'base64'
).toString('binary');

function handler(request: FastifyRequest, response: FastifyReply): void {
    response.header('Content-Type', 'image/x-icon');
    response.send(ico);
}

function plugin(fastify: FastifyInstance, options: unknown, next: (err?: Error) => void): void {
    fastify.get('/favicon.ico', handler);
    next();
}

export = fastifyPlugin(plugin, {
    fastify: '2.x || 3.x'
});
