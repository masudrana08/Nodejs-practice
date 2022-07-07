// import will show error because this is not es6 module
// import mul from './mul.js'


const mul = require('./mul') // require will work because it is commonjs, default module is commonjs
console.log(mul(3, 9));