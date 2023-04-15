const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'must provide name'], 
        trim:true, 
        maxLength: [20, 'name cannot be more than 20 characters']
    }, 

    completed:{
        type: Boolean, 
        default:false, 

    }, 
})


//in mongoose a model is a wrapper for the schema (interface for database)

module.exports = mongoose.model('Task', TaskSchema)