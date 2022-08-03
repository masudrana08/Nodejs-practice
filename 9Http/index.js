const fs = require('fs')
const path = require('path')
const http = require('http')
const queryString = require('querystring')
const formidable = require('formidable')
const server = http.createServer((req, res)=>{
    // = save binary image
    // const stream = fs.createWriteStream(__dirname+'image.jpg')
    // req.pipe(stream)

    // = parse x-www-form-urlencoded
    // req.on('data', data=>{
    //    console.log(queryString.decode(data.toString()));
    // })

    // = parse multipart/form-data with formidable and move it to server storage
    // const form = new formidable.IncomingForm()
    // form.parse(req,(err, fields, files)=>{
    //     fs.renameSync(files.myfile.filepath, path.join(__dirname, 'x.jpg'))
    // })

    res.writeHead(200, {'Content-Type' : 'application/json'})
    res.end(JSON.stringify({"name" :"masud"}))
})
server.listen(8000, (err)=>{
    console.log('running 8000');
})