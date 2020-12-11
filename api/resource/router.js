// build your `/api/resources` router here
const express = require('express'); 
const router = express.Router(); 
const Resource = require('./model'); 

router.post('/resources', async (req, res) => {
    try {
        const {resource_name, resource_description} = req.body; 

        if(!resource_name)return res.status(400).send({e: "Please provide a name"})

        const newResource = {resource_name, resource_description}; 

        await Resource.create(newResource); 
        res.status(200).send(newResource); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})

router.get('/resources', async (req, res) => {
    try {
        const resources = await Resource.getAll(); 
        res.status(200).send(resources); 
    }
    catch(e){
        res.status(500).send(e); 
    }
})

module.exports = router; 