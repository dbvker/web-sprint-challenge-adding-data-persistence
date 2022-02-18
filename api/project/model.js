// build your `Project` model here
const db = require('../../data/dbConfig');

const getProject = async () => {
    const result = await db('projects');
    const booleanResult = result.map(project => project.project_completed === 0 ? { ...project, project_completed: false } : { ...project, project_completed: true })

    return booleanResult;
};

const createProject = async (project) => {
    const result = await db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id).first();
        });

    const booleanResult = result.project_completed === 0 ? { ...result, project_completed: false } : { ...result, project_completed: true };

    return booleanResult;
};

module.exports = {
    getProject,
    createProject
}