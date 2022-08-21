const fs = require('fs')
const path = require('path')
const {Blob} = require('node:buffer')
// const buf = Buffer.alloc(4)
// buf.write('hey boysdfdfdf' )

// const buf = Buffer.from([11, 2, 3, 4]);
// const uint8arr = new Uint8Array(buf);

// console.log(uint8arr);

const mypath = path.join(process.cwd(), 'temp', 'pop.txt')
const mypath2 = path.join(process.cwd(), 'temp', 'popkk.txt')
const readStream = fs.createReadStream(mypath)
// readStream.on('data', data=>{
//     fs.writeFileSync(mypath2, data)
// })

