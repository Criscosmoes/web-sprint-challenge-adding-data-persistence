// build your `Resource` model here
const db = require('../../data/dbConfig'); 

module.exports = {
    create(resource){
        return db('resources').insert(resource)
        .then(([id]) => {
            return db('resources').where('resource_id', id).first()
          })
    }, 
    getAll(){
        return db('resources'); 
    }
}
