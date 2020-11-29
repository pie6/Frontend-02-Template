**Week3 - Browser 工作原理**

# 1. Browser Overview

(URL)→HTTP
(HTML)→parse
(DOM)→css computing
(DOM with CSS)→layout
(DOM with position)→render
(Bitmap)

目標：從URL得到Bitmap

*DOM with CSS, 帶 style 的 DOM
*DOM with position, CSS 生成的 BOX

不管是文字還是圖形，最後由machine render 出來的都是圖形(bitmap)，由顯卡解讀。

# 2. State Machine/Finte State Machine

**FSM**

每一個 State 都是一個 Machine (互相 decopuling)

- 每一個 Machine 都可以 I/O 操作, Computing, Save Data (ex: NPC 的 AI 實現)
- 每一個 State 都是一個 Machine
- 所有 Machine 的 Input 都是一致
- FSM 的每一個 Machine 自身無 State，用函數表示，應為 Pure Function,No Side Effect(Machine不應再受外部Input控制)

每一個 Machine 知道下一個 State
- 每個 Machine 必有下一個 State (Moore, 模式己確定)
- 每個 Machine 根據 Input 決定下一個 State (Mealy)


**FSM with JS (Mealy)**

```js
// every function is a state
function state(input){
    //state logic...

    return next // return value is next state
}

// get input
while(input){
    // FMS return value is next state
    // variable always represents current state
    // state will migrate when getting input
    state = state(input)
}

// return must be a function(state function)
// 由 if/switch case 實現
```


# 3. FSM/Handle String without FSM(1)

Exercise
```js
const str = 'cba'

function findA(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            return i
        }
    }
}
console.log(
    findA(str)
)
```

# 4. FSM/Handle String without FSM(2)

RegExr can implement by FSM

# 5.

# 6. FSM/Handle String with FSM(2)

End state is a  **trap**


//ababcdef

重新使用 state
**reComsume**



# 7. FSM/Handle String with FSM(2)

KMP Algorithm



# 8. HTTP Request/ HTTP Protocol

HTTP Request

一個 request 對應一個 response

ISO-OSI 7 Layer

4G/5G/Wifi, 點對點

Internet / IP 協議

TCP(可靠傳輸) / UCP

require('net')
require('http')

TCP

- stream/
沒有明顯分割單位/只保證傳輸順序


port/
網卡依據port來分配data給 application

require('net')

- package/

 ip address/
 連入 internet 的每個設備

  libnet/ libpcap (node call c++ lib)

  - libnet
建立 ip package and sent

  - libpcap

  流經 網卡的 ip package

http

Request,
response

一個 request 對 一個 respones

**設計 lib**
從使用設計 interface

# 9. HTTP Request/ Server Environment

文本型的協議(所有內容都是字串，實際上字元)/相對於binaray的協議

TCP 協議中都是字元

Request Line

POST / HTTP/ 1.1 (Method, Path`/`, HTTP版本 )


Headers
KV
空行做為結束

content-type

body由content-type決定 ,body需由 content-type定義的格式書寫

換行 \r\n


# 10. HTTP Request/ Server Environment

從使用設計接口型式

Content-Type
Content-Length

Recap

- 設計一個 HTTP Request Class
- Content Type 為必要 field 要有 default 值
- body 為 KV formate
- Content-Type 決定 body 格式
- Content-Length 結尾


# 10. HTTP Request/ send


# 11. HTTP Request/ send function, response formate

逐步收到 response 文本，需要 parser

- Request 收集 message
- 設計 send function and send request to server
- send() is async function (retrun Promise)

**HTTP Response**

HTTP/1.1 200 OK         // status line(protoco/status code/ status context)
Contetn-Type:text/html  // Headers
Date: Sat, 01 Aug 2020 00:00:00 GMT
Connection:keep-alive
Transfer-Encoding: chunked
                        // line sperator
26                      // hex
<html> </html>          // body
0                       // hex

# 12. HTTP Request/ send request

- support 已有 connection / 新建 connection
- data to parser
- 依 parser resolve Promise


# 13. HTTP Request/ response parser

Step4

\r\n

response 分段建立 → ResponseParser(FSM parser ResponseText)


# 14. HTTP Request/ response body

Step5

response body 的格式不是固定的，所以使用**子 Parser**
ex:TrunkedBodyParser

TrunkedBodyParser 使用 FSM

# 15. HTTP Request/ parser HTML

Step 1.

- 文件折分 (parser.js)
- API 設計 (HTML → DOM)

# 16. HTTP Request/ parser HTML with FSM

Step 2.
- parser HTML with FSM
- HTML SPEC, Tokenization (states)
有80個 state 己經規定好了

# 17. HTTP Request/ parser HTML tags

Step 3.

**Tags**

1. Start tags
2. End tags
1. Self-closing start

**States**

Tag Open
End Tag Open
End Tag Name

`\t`, `\n`, `\f`, ` `


# 18. Parse HTML/ Create Elements

Step 4.

FSM → Migrate state + Business Logic (create token)
結束狀態 → emit Token
開始tag 跟 結束tag 是不同的 token，中間是文本 node


# 19. Parse HTML/ attribute

Step 5.

attribute 分為以上三種

- single quote/ double quote/ no quote

parse 完 emit token

# 20. Parse HTML/ DOM Tree

Step 6.

HTML 使用 stack 就可以建立 DOM Tree

- 語法分析

- stack

stack 跟樹是有關係的

- Start Tag → push stack/ End Tag → pop stack
- self-closing Tag → after pushing stack immitatly pop
- Every Element's parent element is push stack's top of stack


# 20. Parse HTML/

parse TextNode

- 與 selfClosingTag 類似
- 多 TextNode 需要合併