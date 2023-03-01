require('dotenv').config(); 

const express = require('express'); 
const app = express(); 

const router = require('./routes/routes'); 
const authMiddleware = require('./middleware/auth')


//middleware
app.use(express.json()); 

app.use('/api/v1', router); 

app.use(authMiddleware)

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