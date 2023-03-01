const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next)=>{
    const authHeader = req.headers.authorization; 

    if(!authHeader || !authHeader.startsWith('Bearer')){
        res.status(401).json({msg:'unauthorized'})
        }
    
    const token = authHeader.split(' ')[1]

    console.log( token);

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        console.log (verified)
        const {name} = verified
        req.user = {name}
        next()
    } catch (error){
        res.status(401).json({msg:'unauthorized'})

    }
}

module.exports = authMiddleware