const db = require('../../data/dbConfig.js'); 



module.exports = {
    create(project){
        return db('projects').insert(project)
        .then(([id]) => {
            return db('projects').where('project_id', id).first()
          })
    }, 
     async getAll(){
        return db('projects').select('project_name', 'description')
    }
}

