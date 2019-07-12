/// <reference types="node" />
/// <reference types="fastify" />
import fastifyPlugin = require('fastify-plugin');
import { ServerResponse } from 'http';
declare const _default: import("fastify").Plugin<import("http").Server, import("http").IncomingMessage, ServerResponse, fastifyPlugin.PluginOptions>;
export = _default;
