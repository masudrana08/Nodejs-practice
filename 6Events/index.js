const events = require('events')

const myEmitter = new events.EventEmitter({captureRejections:true})
// myEmitter.on('name', (fname, lname)=>{
//     console.log('firstname: '+fname)
//     console.log('lastname: '+lname)
// })
// myEmitter.emit('name', 'masud', 'rana')
// myEmitter.emit('name', 'shawon', 'oops')


// myEmitter.on('name', (fname, lname)=>{
//     console.log('firstname: '+fname)
//     console.log('lastname: '+lname)
// })
// myEmitter.on('error', err=>console.log(err))
// myEmitter.emit('name', 'masud', 'rana')
// myEmitter.emit('name', 'masud', 'rana')
// myEmitter.emit('name', 'masud', 'rana')

// console.log(myEmitter.eventNames());


// const sym =  Symbol('symbol')
// myEmitter.on(sym, data=>{
//     console.log(data);
// })

// myEmitter.setMaxListeners(2)
// myEmitter.on('a', data=>{
//     console.log(data);
// })
// myEmitter.on('a', data=>{
//     console.log(data);
// })
// myEmitter.on('a', data=>{
//     console.log(data);
// })

// myEmitter.emit("a", 'a')


