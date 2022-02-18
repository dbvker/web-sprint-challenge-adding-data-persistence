// build your `/api/projects` router here
const router = require('express').Router();

const Project = require('./model');

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in the projects router',
        message: err.message
    });
});

module.exports = router;