**Week18 - Tool Chain**

1. Release/VM Ubuntu Server

**relsease**

1. production
2. developer to cloud (同級/各別獨立)
3. release tool(cli)


2. Release/ Express

實際 Production Server(Monitor/ 錯誤恢復/ 線上重啟)


3. Release/ Deploy(static server)

1. service ssh start
2. listen port 22 (remote login)
3. forward port (settings→network) (host port → guest port 22)
4. scp -P 8022 -r ./* peter@127.0.0.1:/home/peter/server


4. Release/ http server

1. publish-server (push files to server)
2. publish-tool


5. Release/ send request

publish tool → publish server
(stream transfer)

**Stream**

Readable stream (可從 stream 中讀取資料)
Writable stream (request stream, only read)

`write` Async API

http head → sync (秒級)
http body → stream (delivery mass data)

http RFC Standard



8. Release/ multiple files upload

package:
- archiver (compression)
- unzipper (unzip)


**readable stream**

pipe

- 可將 readable stream 導入 writeable stream

9. Release/Github oAuth

Github oAuth flow

1. 跳轉頁面 login

2. get `code` 後換 `access_token`

3. head 寫入 access_token 即可 access