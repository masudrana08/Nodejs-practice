// .mjs means ecmascript module, that's why import is working
// we can use type : module in package.json file then we will got ecmascript module system without mjs
import mul from './mul-ecma.mjs'
console.log(mul(3, 9));