// HTTP API
let http = require('http')

// req, readable stream (incoming message)
http.createServer(function(request, response){
    console.log(request.headers)
    request.on('data', chunk => {
        console.log(chunk.toString())
    })
    request.on('end', chunk => {
        response.end('success')
    })
}).listen(8082)