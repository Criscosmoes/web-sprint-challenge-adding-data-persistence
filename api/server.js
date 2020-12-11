const express = require('express'); 
const ProjectRouter = require("./project/router");
const ResourceRouter = require('./resource/router'); 
const TaskRouter = require('./task/router'); 



const server = express(); 

server.use(express.json()); 
server.use("/api", ProjectRouter);
server.use("/api", ResourceRouter); 
server.use("/api", TaskRouter); 


module.exports = server; 
