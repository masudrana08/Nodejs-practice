// const obj = new Array(1,2,3)
// console.log(obj);


// Default method create
// Object.prototype.test = function(){
//     console.log(`Hey ${this.name}`); 
// }
// const x = {name:'masud'}
// x.test()


// function x(){
//     console.log('x');
// }
// function y(){
//     console.log('y');
// }

// function a(callback){
//     console.log('a');
//     return callback()
// }
// function b(callback){
//     console.log('b');
//      callback()
// }

// b(x)

// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('What is your name? - ', ans=>{
//     console.log('My name is '+ ans);
//     rl.close()
// })

// setTimeout(()=>{console.log('settimeout')}, 0)
// process.nextTick(()=>{console.log('nexttick')})



try{
  console.log('layer 1');
  try{
    const my = {}
    my()
  }
  catch(err){
    console.log(err)
  }
}
catch(err){
  console.log('err layer 1');
}