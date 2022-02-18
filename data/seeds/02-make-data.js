const projects = [
    { project_name: 'Project 1 name', project_description: 'Project 1 description', project_completed: 1 },
    { project_name: 'Project 2 name', project_description: 'Project 2 description', project_completed: 0 }
];

const resources = [
    { resource_name: 'Resource 1 name', resource_description: 'Resource 1 description' },
    { resource_name: 'Resource 2 name', resource_description: 'Resource 2 description' },
];

const tasks = [
    { task_description: 'Task 1 description', task_notes: 'Task 1 notes', task_completed: 1, project_id: 1 },
    { task_description: 'Task 2 description', task_notes: 'Task 2 notes', task_completed: 0, project_id: 2 },
];

const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
];

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('project_resources').insert(project_resources)
    await knex('tasks').insert(tasks)
};
