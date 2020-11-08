let http = require('http');
let fs = require('fs')
let archiver = require('archiver')
// fs.stat("./7-sample.html", (err, stats) => {

    let request = http.request({
        hostname: "127.0.0.1",
        port: 8082,
        method: "POST",
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

    //local
    // archive.pipe(fs.createWriteStream("tem.zip"))

    // 需要知道 request size
    // file.pipe(request)

    // file.on('end', () => request.end())
// })