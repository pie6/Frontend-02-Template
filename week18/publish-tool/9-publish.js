let http = require('http');
let fs = require('fs')
let archiver = require('archiver')
let child_process = require('child_process')
let querystring = require('querystring')

// 1. open https://github.com/login/oauth/authorize

// OSX: open, Powershell: start
child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.9334c52479c13f1a`)

// 3. create server, get token, click and release


http.createServer(function(request, response){
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1])
    publish(query.token)
}).listen(8083)

function publish(token) {

    let request = http.request({
        hostname: "127.0.0.1",
        port: 8082,
        method: "POST",
        path:"/publish?token=" + token,
        headers: {
            'Content-Type': 'application/octet-stream',
            // 'Content-Length': stats.size
        }
    }, response => {
        // stream data
        console.log(response)
    })

    let file = fs.createReadStream('./7-sample.html')

    const archive = archiver('zip', {
        zlib: { level: 9}
    })

    archive.directory('./sample/', false)

    archive.finalize();

    archive.pipe(request)

}

