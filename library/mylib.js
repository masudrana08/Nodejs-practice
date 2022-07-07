const path = require('path')
module.paths.unshift(__dirname) 
// library path is set to module paths
// That's why require is working without relative path
const exporter = require('exporter')
console.log(exporter);

// console.log(process.cwd(), 'current directory');
// console.log(__dirname, 'dirname');
console.log(module);