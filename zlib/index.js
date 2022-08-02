const path = require('path');
const myfile = path.join(process.cwd(), 'temp', 'pop.txt');
const outfile = path.join(process.cwd(), 'temp', 'pop.gz');
// =================== Zip =========================== //
// const gzip = require('zlib').createGzip()
// const inp = fs.createReadStream(myfile);
// const out = fs.createWriteStream(outfile);
// inp.pipe(gzip).pipe(out);

// =================== Unzip =========================== //
// const unzip = require('zlib').createUnzip()
// const inp = fs.createReadStream(outfile)
// const out = fs.createWriteStream(myfile)
// inp.pipe(unzip).pipe(out)