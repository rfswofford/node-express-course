const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:String, 
    completed:Boolean
})

//in mongoose a model is a wrapper for the schema (interface for database)

module.exports = mongoose.model('Task', TaskSchema)