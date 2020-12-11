// build your `/api/projects` router here
const express = require('express'); 
const router = express.Router(); 
const Project = require('./model'); 

router.post("/projects", async (req, res) => {
    try {
       const { project_name, description } = req.body; 

       if(!project_name) return res.status(400).send({e: "Please provide a project name"})

       const newProject = {
           project_name, description,
       }

       await Project.create(newProject)
        res.status(201).send(newProject); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})


router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.getAll(); 
        res.status(200).send(projects); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})





module.exports = router; 