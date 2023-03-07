require('dotenv').config(); 
require('express-async-errors');


const express = require('express'); 
const app = express(); 
const process = require('process')

const router = require('./routes/routes'); 
const authMiddleware = require('./middleware/auth')
const errorHandlerMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json()); 

app.use('/api/v1', router); 

app.use(authMiddleware);
app.use(errorHandlerMiddleware);

//make sure .env file exists 

const fs = require('fs')
const path = './.env'

//check for env and JWT_SECRET env variable

try {
    if (!fs.existsSync(path)){
        throw new Error (`Environment file ${path} does not exist`);
    }

//File exists, check for env
if (!process.env.JWT_SECRET){
    throw new Error ('Required environment variable JWT_SECRET is not defined.')
    }
} catch(err){
    console.error(err)
    process.exit(1);
}



const port = process.env.PORT || 5000;

const start = async ()=>{

    try{
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`)
        });
    } catch (error){
        console.log(error); 
    }
}; 

start(); 