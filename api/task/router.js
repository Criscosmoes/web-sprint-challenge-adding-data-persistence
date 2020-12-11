// build your `/api/tasks` router here
// build your `/api/resources` router here
const express = require('express'); 
const router = express.Router(); 
const Task = require('./model'); 

router.post('/tasks', async (req, res) => {
    try {
        const {task_description, task_notes, project_id} = req.body; 

        if(!task_description || !project_id)return res.status(400).send({e: "Please provide a name"})

        const newTask = {task_description, task_notes, project_id}; 

        await Task.create(newTask); 
        res.status(200).send(newTask); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.getAll(); 
        res.status(200).send(tasks); 
    }
    catch(e){
        res.status(500).send(e); 
    }
})

module.exports = router; 