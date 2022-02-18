// build your `Resource` model here
const db = require('../../data/dbConfig');

const getResource = () => {
    return db('resources')
};

const createResource = async (resource) => {
    const [id] = await db('resources').insert(resource);
    return getResource().where('resource_id', id).first();
};

module.exports = {
    getResource,
    createResource
}