// const obj = new Array(1,2,3)
// console.log(obj);


// Default method create
// Object.prototype.test = function(){
//     console.log(`Hey ${this.name}`); 
// }
// const x = {name:'masud'}
// x.test()


function x(){
    console.log('x');
}
function y(){
    console.log('y');
}

function a(callback){
    console.log('a');
    return callback()
}
function b(callback){
    console.log('b');
     callback()
}

b(x)