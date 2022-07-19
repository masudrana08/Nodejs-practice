// load json in ecmascript
// import config from './config.json' assert {type:'json'}
// console.log(config);

import {read, readFile} from 'fs'

readFile('./temp.txt', (err, source)=>{
    if(err) console.log(err);
    console.log(source.toString());
})