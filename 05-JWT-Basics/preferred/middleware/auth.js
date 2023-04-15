const jwt = require('jsonwebtoken')
const CustomAPIError = require ('../errors/custom-error')

const authMiddleware = async (req, res, next)=>{
    const authHeader = req.headers.authorization; 
    
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError ('no token provided')
    }
 
    const token = authHeader.split(' ')[1]

    console.log(token);

        

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