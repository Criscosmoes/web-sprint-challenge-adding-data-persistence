// build your `Task` model here
// build your `Resource` model here
const db = require('../../data/dbConfig'); 

module.exports = {
    create(task){
        return db('tasks').insert(task)
        .then(([id]) => {
            return db('tasks').where('task_id', id).first()
          })
    }, 
    getAll(){
        return db('tasks as t')
        .join("projects as p", "t.task_id" ,"p.project_id")
        .select("task_id", "task_description", "task_notes", "t.completed", "p.project_name", "p.description")
    }
}
