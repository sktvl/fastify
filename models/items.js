const { getItems, getItem, postItem, deleteItem, updateItem } = require('../controllers/items');

const item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
};
const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: item
            }
        }
    },
    handler: getItems
}

const getItemOptions = {
    schema: {
        response: {
            200: item
        }
    },
    handler: getItem
}

const postItemOptions = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {
                    type: 'string'
                }
            }
        },
        response: {
            201: item
        }
    },
    handler: postItem
}
const deleteItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            }
        }
    },
    handler: deleteItem
}

const updateItemOptions = {
    schema: {
        response: {
            200: item
        }
    },
    handler: updateItem
}


module.exports = {
    getItemsOptions,
    getItemOptions,
    postItemOptions,
    deleteItemOptions,
    updateItemOptions
}