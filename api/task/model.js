// build your `Task` model here
const db = require('../../data/dbConfig');


const getTask = async () => {
    const result = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 't.project_id', 'p.project_name', 'p.project_description');

    const booleanResult = result.map(task => task.task_completed === 0 ? { ...task, task_completed: false } : { ...task, task_completed: true })

    return booleanResult;
}

const createTask = async (task) => {
    const result = await db('tasks')
        .insert(task)
        .then(([task_id]) => {
            return db('tasks').where('task_id', task_id).first();
        });

    const booleanResult = result.task_completed === 0 ? { ...result, task_completed: false } : { ...result, task_completed: true };

    return booleanResult;
};

module.exports = {
    getTask,
    createTask,
};
