const sentence = require ('./practice2')
const os = require ('os')
const {writeFile} = require ('fs')

writeFile ('./content/practice.txt',
`${sentence.sentence} ${os.userInfo().username}`,
 (err, result)=>{
    if(err){
        console.log(err)
        return
    }
})
