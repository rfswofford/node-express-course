const consoleLog = (req, res, next)=>{
    console.log ('log this statement')
    next()
}

module.exports = consoleLog

