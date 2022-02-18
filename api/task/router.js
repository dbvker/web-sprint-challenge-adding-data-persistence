// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', (req, res, next) => {
    Task.getTask()
        .then(tasks => {
            res.status(200).json(tasks);
        }).catch(next);
});

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        }).catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in the tasks router',
        message: err.message
    });
});

module.exports = router;