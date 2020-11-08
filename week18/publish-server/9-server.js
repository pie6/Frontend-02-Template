let http = require('http')
let https = require('https')
let unzipper = require('unzipper')
let querystring = require('querystring')

// 2. auth router: 接受 code, 用 code + client_id + client_secretn 換 token
// ( start a local server, github router 無法跟 CLI communication)
function auth(request, response) {
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1])
    getToken(query.code, function(info){
        console.log(info)
        // response.write(JSON.stringify(info))
        response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`)
        response.end();
    })
}

function getToken(code, callback) {
    // console.log(code)
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.9334c52479c13f1a&client_secret=888cc423ff076a569f919a69ca6321e494691a8b`,
        port: 443,
        method: 'POST'
    }, function(response){
        let body = ''
        response.on('data', chunk => {
            body += chunk.toString()
            return
        })
        response.on('end', chunk => {
            console.log(body)
            callback(querystring.parse(body))
        })
    })
    request.end();
}
//   - querystring
// 4. publish router: 用 token GET USER INFO → check AUTH, ACCEPT RELEASE


function publish(request, response) {
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1])
    if (query.token) {
        getUser(query.token, info => {
            if (info.login === 'pie6') {
                // AUTH System
                request.pipe(unzipper.Extract({ path: '../server/public/' }))
                request.on('end', function(){
                    response.end('success!')
                })
            }
        })
    }
}

function getUser(token, callback) {
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        port: 443,
        method: 'GET',
        headers: {
            Authorization: `token ${token}`,
            "User-Agent": 'toy-publish'
        }
    }, function(response){
        let body = ''
        response.on('data', chunk => {
            body += chunk.toString()
        })
        response.on('end', chunk => {
            callback(JSON.parse(body))
        })
    })
    request.end();
}

http.createServer(function(request, response){
    console.log(request)
    if (request.url.match(/^\/auth\?/)) {
        return auth(request, response)
    }
    if (request.url.match(/^\/publish\?/)){
        return publish(request, response)
    }
    // let outFile = fs.createWriteStream('../server/public/tmp.zip')

}).listen(8082)