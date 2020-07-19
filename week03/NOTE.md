**Week3 - 重學 JavaScript**

# 1. JS Expression/Operator & Expression

**Atom**

Grammar

- Grammar Tree & Priority
- Left Hand Side & Right Hand Side

Runtime

- Type Convertion
- Reference

**Expression**

執行優先順序

Member Expression

- a.b, a[b]
- foo\`string`
- super.b, super[b]
- new.target
- new Foo()

New Expression

- new Foo

Call Expression

- foo()
- super()
- foo()['a']
- foo().a
- foo()`abc`

**Reference**

Runtime 時的參考

Object ,Key / delete, assign


**Left Handside & Right Handside**

LH: 可放 = 左邊

**Update Expression**

- a ++
- a --
- --a
- ++a

++ a ++ → ++ (a++)

**Unary Expression**

- delete a.b
- void foo()
- typeof a
- await a
- +, -, ~, ! a

**Exponental Expression**

- **

3 ** 2 ** 3 → 3 ** (2 ** 3)

**加減乘除**

Multiplicative

- *, /, %

Additve

- +, -

Shift

- <<, >>, >>>

Relationship

- <, >, <=, >=, instanceof, in

**比較**

Equality

- ==
- !=
- ===
- !==N

Bitwise

- &^|

**Logical Expression**

Logic

- &&, ||

Conditional

- ?:

**shortcut rule**

# 2. JS/ Type Convertion

類型轉換

==

通常先轉為 Number 後進行比較, ex false == 0, false → 0

Object, Boxing 轉換

**Unboxing**

ToPremitive

- toString, valueOF, Symbol.toPrimitive

Object 轉為 普通類型

Number → valueOf()


**Boxing**



# 3. JS/Statement

GrammarN

- 簡單語句 / 組合語句 / 宣告

Runtime

- Completion Record / Lexical Environment

**Completion Record**

JS Engine 執行完成的結果
(ex: return ?, return 的結果 ?)

決定 statement 是否繼續執行

- [[type]]

normal, break, continue, return or throw

- [[value]]

基本類型

- [[target]]

label (ex: `loop1:`)

**簡單 Statement**

- Expression(`expression;`), Empty(`;`), Debugger(`debugger;`)

有 = 所以有 side effect (state changing)

Control Flow Statement

- Throw(expection), Continue(結束當次loop), Break(結束loop), Return

複合 Statement

- Block,
- If, Switch
- Iteration, With, Labelled,
- Try(try, catch, finally)

TryStatement 並不是 使用 BlockStatement 來做多 statement ，所以 blockStatement 不能省略

複合 statement 會使用 [[Completion Record]] 來完成 flow control

BlockStatement

[[type]]: normal
[value]:  --
[[target]]: --


Iteration

- while( ), do while( )
- for( ; ; ), for( in )
- for ( of ),
- for await ( of ) → async generator

定義 scope: var/ const/ let

i 可以跨 scope 儲存

Labelled/Iteration/Continue/Break/Switch

[[type]]: break continue

[[value]]: --

[[target]]: label

try

[[type]]: return

[[value]]: --

[[target]]: label

在 finally 中 return, finally 仍會執行完畢


# 5. JS/Declaration

- Function, Generatior, Async, AsyncGenerator

- Variable(`const`, `let`), Class, Lexical

Declaration

`function`, `function*`, `async function`, `async function *`,

`var` 後面的賦值不會發生

- `class`, `const`, `let` 預處理(pre-process)

Pre-Process

Scan 所有 Declaration，把 variable 變成local variable

`var` 會被限制在 function scope

`const` declar 前使用會引發 exception, `const` + { } 來在 function 中 產生結構

`function` + `var` → 舊 declartion system

`const`, `let`, `class` → 新 declartion system


# 5. JS/Marco, Mircro Tasks

- Macro(pass to JS Engine), Micro(JS Engine itself, ex: `Promise`, job)

- Call Function (Execution Context)

- Statement/ Declaration (Completion Record)

- Expression (Reference)

- literal/ Variable/ this


Event Loop (如何使用JS Engine)

1. Get Code
2. Execute
3. Wait


# 5. JS/Fuction Invocation

Micro Task 內 Fuction Invocation

Execution Context Stack
- Running Execution Context (Top of Stack)

**Execution Context**

- code evaluation state (async/generator, 用於目前 code 執行情況)
- Function
- Script / Module
- Generator (Generator 建立的專屬 Execution Context)
- Realm (built-in object)
- LexicalEnvironment (執行 code 時的 environment)
- VariableEnvironment ( var 所創造的 environment )


**Generator Execution Contexts**

- ...ECMASCript Code Execution Context
- Generatior

**LexicalEnvironment**

- this
- new.target
- super
- variable

**VariableEnvironment**

var declartion

eval 會穿透 { } block scope


**Environment Record**

Environment 是一個鍊式的結構，結構中的每個 node 稱為 Environment Record，並且有繼承關係

- Environment Records
    - Declarative(`{ }`)/ Global(`with`)/ Object
        - Function/ Module

**Closure**

每一個 Function 都會生成一個 Closure

每個 Closure 分為 2 部分

- Code
- Environment (object + variable sequence) , 每個 function 都會有自己的 Environment Records


```js
var y = 2
function foo2() {
    var z = 3
    return () => {
        console.log(y, z)
    }
}
var foo3 = foo2()

// Code → console.log(y, z)
// foo3 Environment Record→ z:3, this: globac → y:2 (ES2018以前, scope chain)
```


**Realm**

記錄 object 的 prototype 是誰 (iframe 中每個 object 的 prototype 都不同, `instance of` 可能失效 )

- function expression 和 object 都會產生 object
- `.` 隱式轉換產生 object
