const a = require('./emitter');
console.log(a);

setTimeout(() => {
  console.log(a);
}, 6000);

// a.on('ready', () => {
//     console.log(a);
//   console.log('module "a" is ready');
// });