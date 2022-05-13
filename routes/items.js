const { getItemsOptions, getItemOptions, postItemOptions, deleteItemOptions, updateItemOptions } = require('../models/items');

function getItemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOptions);
    fastify.get('/items/:id', getItemOptions);
    fastify.post('/items', postItemOptions);
    fastify.delete('/items/:id', deleteItemOptions);
    fastify.put('/items/:id', updateItemOptions);

    done();
}
module.exports = getItemRoutes;