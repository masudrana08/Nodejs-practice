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





// -------------->  Inspect

// const obj = {name:'masud', roll: 1, description: 'I am mern stack developer, I am mern stack developerI am mern stack developerI am mern stack developerI am mern stack developerI am mern stack developerI am mern stack developer'}

// console.log(util.inspect(obj, { compact: true, depth: 1 , breakLength: 2 }));


// const obj = { a: 1 };
// const obj2 = { b: 2 };
// const weakSet = new WeakSet([obj, obj2]);

// console.log(weakSet)
// console.log(util.inspect(weakSet, { showHidden: true }));

// -------------------------------- Show 10 depth
// const obj = {
//     a: {
//         x: 'fdls', 
//         y: "jfldf",
//         z: {
//             a:'df',
//             b:{
//                 x:'dfd',
//                 z: {
//                     a: '',
//                     y:{
//                         a: [1,2]
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(obj);
// console.log(util.inspect(obj, {showHidden:true, depth:10}));

// -------------------------------- Sort
// util.inspect.styles = {string:'yellow'}
// const o2 = {
//     c: new Set([2, 1, 3]),
//     a: '`a` comes before `b`',
//     b: [2, 3, 1]
//   };
// console.log(util.inspect(true, {sorted:true}));


// -------------------------------- Util Promisify & Util Color set
// const stat = util.promisify(fs.stat);
// util.inspect.styles = {number:'green', string:'yellow', boolean:'red'}
// stat('.').then((stats) => {
//   // Do something with `stats`
//   console.log(stats);
// }).catch((error) => {
//   // Handle the error.
// });

// --------------------------- Remove Ansi escape code
// const a = '\u001B[4mvalue\u001B[0m'
// console.log(util.stripVTControlCharacters(a));

// --------------------------- Decoder & Encoder
const decoder = new TextDecoder();
// const u8arr = new Uint8Array([72, 101, 108, 108, 111]);
// console.log(u8arr);
// console.log(decoder.decode(u8arr)); //

// const encoder = new TextEncoder();
// const src = 'Hello';
// console.log(encoder.encode(src));



// THERE ARE LOT OF TYPE CHECKING FEATURE
// util.types.isAnyArrayBuffer