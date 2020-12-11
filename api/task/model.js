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
        return db('tasks'); 
    }
}
