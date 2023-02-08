const express = require('express')
const app = express()
const logger =require ('./logger')
const authorize = require ('./authorize')

//can add a path to app.use in order to only apply it to some of the app.gets
//run multiple middleware functions in app.use by placing in an array
app.use( [logger, authorize]) //invokes for any route that comes after. order matters here -- middleware goes first

//api/home/about/products

app.get('/',  (req, res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user) 
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....')
})

