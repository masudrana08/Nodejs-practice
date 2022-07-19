const util = require('node:util');
const fs = require('fs')
const EventEmitter = require('events')

// --------------> Callbackify
// async function fn(data) {
//   return data
// }
// const callbackFunction = util.callbackify(()=>fn('hey'));

// callbackFunction((err, data)=>{
//   console.log(data);
// });

// --------------> Callbackify Error
// async function fn(data) {
//   return Promise.reject(null)
// }
// const callbackFunction = util.callbackify(()=>fn('hey'));

// callbackFunction((err, data)=>{
//   if(err) console.log(err,'err')
//   if(!err) console.log(data, 'data')
// });

// -------------->  Error mapping
// fs.access('file/that/does/not/exist', (err) => {
//   const errMap = util.getSystemErrorMap()
//   const errName = errMap.get(err.errno)
//   console.log(errName);
// });

// const mymap = new Map()
// mymap.set('oops', '')
// mymap.set([1,2,3], {roll:11})
// console.log(mymap.get([1,2,3]));



// --------------> Event emitter normal
// const mystream = new EventEmitter()
// mystream.on('oop', data=>{
//     console.log(data,'data');
// })

// mystream.emit('oop', 'working' )


// --------------> Event Emitter inheritance
// function myStream(){
//     EventEmitter.call(this)
// }
// myStream.prototype.write= function(data){
//     this.emit('data', data)
// }
// util.inherits(myStream, EventEmitter)
// const stream = new myStream()
// stream.on('data', data=>console.log(data))
// stream.write('oops')


// --------------> Event Emitter ES6 Class
// class MyStream extends EventEmitter{
//     write(data){
//         this.emit('data', data)
//     }
//     getResult(){
//         this.on('data', data=>console.log(data))
//     }
// }
// const stream = new MyStream()

// stream.getResult()
// stream.write('oops')


