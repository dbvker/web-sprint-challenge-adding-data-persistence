// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in the tasks router',
        message: err.message
    });
});

module.exports = router;