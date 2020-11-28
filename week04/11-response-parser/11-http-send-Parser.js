const net = require('net')

class Request {
    constructor(options) {
        this.method = options.method || 'GET';
        this.host = options.host
        this.port = options.port || 80;
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}
        if(!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }

        if(this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body)
        } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
        }
        // 不建議設計成從外部傳入
        this.headers['Content-Length'] = this.bodyText.length
    }

    // 逐步收到 message，所以需要 parser
    send() {
        return new Promise((res, rej) => {
            const parser = new ResponseParser
            resolve('')
        })
    }
}

class ResponseParser {
    constructor() {
    }
    // interface
    receive(string) {
        for (let index = 0; index < array.length; index++) {
            this.receiveChar(string.charAt(index))
        }
    }
    // FSM
    receiveChar(char) {

    }
}

void async function () {
    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8080',
        path: '/',
        headers: {
            ['X-Foo2']: 'customed'
        },
        body: {
            name: 'pie6'
        }
    })

    let response = await request.send();
    console.log(response);
}()