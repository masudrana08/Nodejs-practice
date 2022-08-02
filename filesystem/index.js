const {open} = require("fs/promises");
const fs = require("fs");
const path = require('path');
const myfile = path.join(process.cwd(), 'temp', 'pop.txt');
// ============= delete file asyncronously =============
// (
//     async function deleteFile(fpath){
//         try{
//             await fs.unlink(fpath)
//             console.log('successfully deleted path');
//         }
//         catch(err){
//             console.log(err);
//         }
//     }
// )('./temp/hello.txt')

// ============= delete file callback =============
// fs.unlink('./temp/hello.txt', (err)=>{
//     if(err) throw err
//     console.log('deleted');
// })

// ============= Open and Read file =============

// const readableStream = fs.createReadStream('./temp/pop.txt')
// readableStream.on('data', data=>{
//     console.log(data.toString());
// })



const readline = require('readline');

//  =================== Readline ======================
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Why should you use streams? ', (answer) => {
//   console.log(`Maybe it's ${answer}, maybe it's because they are awesome! :)`);

//   rl.close();
// });





// ============ Create Folder ===============
// const exist = fs.existsSync(myfile)
// if(!exist){
//     fs.mkdirSync(myfile)
// }

// ============  ===============
const mypath = path.join(process.cwd(), 'temp', 'pops.txt');
// const x = fs.lstatSync(mypath).isFile()

// fs.access(mypath, err=>{
//    fs.chmod(mypath, 777, err=>{
//     fs.access(mypath, err=>{
//         fs.writeFile(mypath, 'hello', ()=>{})
//     })
//    })
    
// })
// fs.chmod(mypath, 0o777, err=>console.log(err))
// fs.copyFile(mypath, path.join(process.cwd(),'temp', 'pop.txt'), err=>{
//     console.log(err);
// })
fs.watchFile(mypath, stat=>{
    console.log(stat);
})