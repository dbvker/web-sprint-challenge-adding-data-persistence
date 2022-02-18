// build your `/api/resources` router here
const router = require('express').Router();

const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.getResource()
        .then(resources => {
            res.status(200).json(resources);
        }).catch(next);
});

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        }).catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in the resource router',
        message: err.message
    });
});

module.exports = router;