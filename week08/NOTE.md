**Week8 - HTML, BROWSER API**

# 1. HTML| Definition

繼承 XML & SGML(資料描述)

- XHTML/XHTML2/XML namespace
- DTD ( Document Type Definition)


**ENTITY**

- HTMLlat1.ent

nbsp，空格不分詞。應使用 CSS `white-space`

- HTMLsymbol.ent

- HTMLspecial.ent

<!ENTITY quot    "&#34;"> <!-- ""  -->
<!ENTITY amp     "&#38;#38;"> <!--  & -->
<!ENTITY lt      "&#38;#60;"> <!-- < -->
<!ENTITY gt      "&#62;"> <!--  > -->

**XHTML namespace**


# 2. HTML| Sematic

<html>
    <head>
        <title></title>
    </head>

    <body>

        <aside>
        </aside>
        <main>
            <article>
            <hgroup>
                <h1></h1>
                <h2></h2>
                </hgroup>

                <p class="note"></p>
                <!-- 使用 class 做補充 -->
                <abbr>WWW</abbr>
                <strong></strong>
                <em></em>

                <figure>
                    <figcaption></figcaption>
                    <img src="" alt="">
                </figure>

                <nav>
                    <ol>
                        <li></li>
                        <li></li>
                        <li>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </li>
                    </ol>
                </nav>

                <dfn></dfn>
<samp>
    <code>
        <pre>
            code...
        </pre>
    </code>
</samp>


            </article>
        </main>

        <footer>

        </footer>
    </body>

</html>


- smatic 系統


# 3. HTML| Syntax

**合法元素**

1. Element: <tagname>...</tagname>
2. TEXT Node: text
3. Comment Node: <!--  comments -->
4. DocumentType Node: <!Doctype html>
5. ProcessingInstruction Node: <?a 1?>
6. CDATA Node: <![CDATA[ ]]> // 不用考慮轉義

**字元引用**

- &#161;
- &amp;
- &lt;
- &quot;



# 4. HTML| DOM API

Browser API
- DOM API
- BOM API


DOM API

- travesal (discard)
- Node 
- event (interactive)
- range (DOM Tree, better perforance)


**DOM Tree**
DOM Tree 上的東西來自 node class：Node
Node 不一定是 Element, 但 Element 一定是 Node

DocumentFragment，不在 DOM Tree，要掛在 DOM Tree 時會全掛


**Operation: Navigation**

自由的在 DOM Tree 上移動

Node:

- parenetNode/childNodes
- firstChild/lastChild
- nextSibling/previousSibling

whitespace, tab 也是文本 node

Element:

- parenetElement/children
- firstElementChild/lastElementChild
- nextElementSibling/previousElementSibling


**Operation: Manuptation**

- appendChild/insertBefore (1個最小化) insertBefore + appendChild = insertAfter
- removeChild(parent 上進行)/
- replaceChild = removeChild + insertBefore


Advanced

- compareDocumentPosition 2 Node 中關係
- contains 檢查一個 Node 是否包含另一個 Node
- isEqualNode 檢查 2 Node 是否完全相同 (樹形結構，不用序列化)
- isSameNode 檢查 2 Node 是否是同一 Node，實際 JS 中可用 `===`
- cloneNode 復制一個 Node，如果傳入 true ，連子元素做 Deep Clone (HTML　模版)



# 4. HTML| Event API

- addEventListener
 passive (沒副作用, EX 只做監聽 onScroll)

 Event Capture

不論你做不做 Listener，Event 都會發生，過程都在
任何事件都是先 Capture 再 Bubble，因為你 Click 不到元素，Click 是通過 Browser 算出來你 Click 到誰
Bubble 則是計算完後，由內向外去 Response Event
先加先觸發


# 5. HTML| Range API

iterator API (discard)

半個 Node, 批次 Node

1. 把一個元素所有的子元素 reverse

1/2/3/4/5 → 5/4/3/2/1

A: insert 4 次
B: Range API

1. DOM Collection: **living collection** 取值後, collection 會變化
2. insert 時，不需要先 remove。 進行 insert 動作時，會先 remove 再 append

```js
// A1
let element = document.getElementById("id")
// Transfer Nodes to Array, Not Living Collection anymore
Array.prototype.slice.call(element.childNodes)

for() {
    removeChild()
}

for() {
    appendChild()
}

```

```js
// A2
// Node API
var l = el.childNodes.length
while(l-- >0) {
    el.appendChild(el.childNodes[l])
}
```


**Range API**
- 連續範圍，有起終點, 偏移值
- 偏移值：element 為 children/text 為 text 個數
- 可偏移半個 Node (ex: 切半個 <span>)

- range
    * range.setStartBefore
    * range.setEndBefore
    * range.setStartAfter
    * range.setEndAfter
    * range.selectNode
    * range.selectNodeContents

```js
// 只 append childNode 而不包含自身
var fragment = range.extractContents()

range.insertNode(document.createTextNode('text'))
```


var range = new Range()
range.setStart(el, num)
range.setEnd(el, num)
var range = document.getSelection().getRangeAt(0);

```js
// A3
// Range API

let range = new Range() // 選中摘取
let fragment = range.extractContents() // 元素操作,批量 append
```

fragment 已離開 DOM, 所以其上的操作是不影響 DOM 的


# 5. Browser API| CSSOM

Browser API !== DOM API

DOM API 是 HTML Language的 Object 化 → 對 HTML 文本的抽象

CSS 是在 HTML 裡，所以需要透過 DOM API `document.styleSheets` 來 access

建立 CSS

- `<link>`
- `<style>`

`styleSheets`

一個 `styleSheets` 對應一個 `<style>` 或 `<link>`

- cssRules( 內容對應 CSS 語法)
 - CSSStyleRue(`selectorText`: 選擇器/ `style`: K-V)
- insertRule()
- removeRule()

通過 CSSOM 改 style

- 批次 Edit
- 修改偽元素
- 對應 CSS 語法

`getComputerdStyle`

window.getComputedStyle(el, pseudoEl)

- 取元素，偽元素
- 無法使用 DOM API acess 但需要知道的 (transform, 做drag/ 目前動畫播放)


# 6. Browser API| CSSOM View

- 獲取 layout/ render 之後的 資訊
- 跟 browser layout 後產生的 View 相關


**window API**

window.innerHeight, window.innerWidth (viewport, 實際 html)
window.outerHeight, window.innerWidth (實際 browser 所佔)
window.devicePixelRatio, DPR (1px 與實際物理機器上的比值)

screen.width /screen.height (ex: 包含 tool bar)
screen.availWidth /screen.availHeight

windo.oepn("about:blank", "_blank", "")
 - moveTo(), moveBy(), resizeTo(), resizeBy

**Scroll API**

scroll element

- scrollTop/ scrollLeft (目前位置)
- scrollWidth/ scrollHeight (可滾動內容最大寬度/高度)
- scroll, scrollTo (滾動到)/ scrollBy (差值) / scrollIntoView ( screen 區域)

window.scroll

- scrollX/scrollY
- scroll/scrollBy

有 scroll bar 時才生效

**layout API**

- getClientRects (取 EL 生成所有 BOX)
- getBoundingClientRect ( 取 EL 生成 BOX 所有範圍)

偽元素無法被選中 (文字無法被 COPY)


# 6. Browser API| APIs

khronos/ WebGL
ECMA/ ECMAScript
WHATWG/ HTML
W3C/ webaudio, CG/WG/IG