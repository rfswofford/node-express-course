const EventEmitter = require('events'); 

const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log('some other logic here')
})

//must go after the .on events 
customEmitter.emit('response')

