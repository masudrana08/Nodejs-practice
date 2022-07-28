const EventEmitter = require('events');

module.exports = 'rana'

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(() => {
  module.exports = 'masud'
}, 5000);


// Another part
// const x = new EventEmitter()

// let arr = [1,2,3,4]
// arr.forEach((item, i)=>{
//   setTimeout(()=>{
//     x.emit('start', item)
//   },(i+1)*1000)
// })

// x.on('start', function(data){
//   console.log(data);
// })