const jwt = require('jsonwebtoken'); 

const logon = async (req, res)=>{
    const {name, password}= req.body;
    const token = jwt.sign({name}, process.env.JWT_SECRET, {expiresIn:'24h'});
    res.status(200).json({msg:'new user create, success', token});
}

const hello = async (req, res) =>{
    res.status(200).json({msg: `Hello, ${req.user.name}, welcome to the application`})
}

module.exports ={
    logon, 
    hello,
}