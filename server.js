const fastify = require('fastify')({ logger: true });
const PORT = 5000;

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Fastify-Api'
        }
    }
});
fastify.register(require('./routes/items'));

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.logger.error(error);
        process.exit(1);
    }
}
start();
