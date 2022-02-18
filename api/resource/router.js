// build your `/api/resources` router here
const router = require('express').Router();

const Resource = require('./model');

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in the resource router',
        message: err.message
    });
});

module.exports = router;