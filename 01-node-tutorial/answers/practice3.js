fs = require ('fs').promises; 

async function makeFile (){
    try {
        await fs.writeFile('./content/practice2.txt', 'This is the first line.\n')
        for (let i=2; i<11; i++){
        await fs.writeFile('./content/practice2.txt', `This is line ${i} \n`, {flag:'a'})
        }

    }
    catch (err){
        console.log (err)
    }
}

makeFile()