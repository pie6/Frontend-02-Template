let http = require('http');
let fs = require('fs')

let request = http.request({
    hostname: "127.0.0.1",
    port: 8082,
    method: "POST",
    headers: {
        'Content-Type': 'application/octet-stream'
    }
}, response => {
    // stream data
    console.log(response)
})


let file = fs.createReadStream('./package.json')

file.on('data', chunk => {
    console.log(chunk.toString())
    request.write(chunk)
})
file.on('end', chunk => {
    console.log('read finished')
    request.end(chunk)
})


// // send req
// request.end()