学习笔记

- Week2 - 重學 JavaScript

# 1. 語言分類方法

型式語言(Chomsky hierarchy)

Type-0 無限制文法 (Unrestricted grammar)
Type-1 上下文相關文法 (Context-sensitive grammar)
Type-2 上下文無關文法 (Context-free grammar)
Type-3 正則文法 (Regular grammar)

**具有上下從屬關係，Type-3屬於Type-0, 1, 2；反過來不一定成立。

# 2. BNF 產生式

<語法結構名>

**Nonterminal**



**Terminal**

`*` 重複多次

`|` 或

`+` 至少一次

# 3. BNF & Chomsky hierarchy


Type-0 X::=X

Type-1 X`<A>`Y::=X`<B>`Y

Type-2  `<A>`::=X

Type-3  `<A>`::=`<A>`X

**JavaScript：** 右結合 / if, while 語句

其它產生式: EBNF, ANBF

# 4. 現代程式語言分類

**以用途分類**

資料描述語言(Data Definition Language, 無法程式化)：

- JSON, XML, HTML, SQL, CSS

程式語言(Programming Language)

- C, C++, C#, ECMAScript, FORTRAN, Java, MATLAB

**以表達方式分類**


聲明式(Declarative)：(Logic/Functional

- Haskell, Lisp

指令式(Imperative)：Structured/Procedural/Modular

- Powershell, Python, Ruby


# 5. 程式語言性質

**圖靈完備性**

- 命式式(圖靈機)： GOTO / IF, WHILE

- 聲明式(Lambda)： Recursive

**動態/靜態**

動態

- Client/Server
- Production Environment
- Runtime

靜態

- Developer's Machine
- Develop Environment
- Compiletime


**類型**

動態/靜態類型
強/弱類型

複合類型

- 結構體
- 函數簽名

子類型

泛型

- 逆變
- 協變


# 6. 命令式程式語計設計

**1st. Atom**

- Identifier
- Literal

**2nd. Experssion**

- Atom
- Operator
- Puncturator

**3rd. Statement**

- Expression
- Keyword
- Punctuator

**4th. Structure**

- Function
- Class
- Process
- Namespace

**5th. Program**

- Program
- Module
- Package
- Library

程式語言：

利用語法表示語義來改變 Runtim 狀態

# 7. JS Type/Number

**Atom**

Grammar

- Literal
- Variable
- Keyword
- Whitespace
- Line Terminator

Runtime

- Types
- Execution Context

Literal → Types
Variable → Execution Context

**Type**

Number/String/Boolean/Object/Null/Undefined/Symbol/(BigInt)

Null：有值為空

Undefined：無定義值

**Number**

IEEE 754 Double Float
- Sing(1)
- Exponent(11)
- Fraction(52)


# 8. JS Type/String

**String**

- Character
- Code Point
- Encoding

**Encoding**

- ASCII
- Unicode
- UTF8/UTF16

**Grammar**

"abc"

'abc'

\`abc\`

**String Template**

字串本體

\`ab${x}abc{y}a\`

\`ab${

}abc{

}a\`

可使用function

# 9. JS Type/其它

null

undefined
- void 0


# 9. JS Object & Symbol

- 任何 Object 都是唯一
- State 由 Object 決定，用來描述 Object
- State 改變即行為

**三要素**

state/identifier/behavior

**描述 Object**

Class

- 歸類→多繼承(C++)
- 分類→單繼承(Java, C#)

Portotype

- Ex Nihilo

# 10. JS Object

**Property**

- Key(string, symbol)
- Value (data, accessor)

**Data/Accessor Property**

Data

[[value]]/writable/enumerable/configurable

Accessor

get/set/enumerable/configurable

[[Prototype]]

**Prototype**

Prototype Chain

**API/Grammar**

- `{}` / `.` / `Object.defineProperty` (基於Grammar)
- `Object.create` / `Object.setPrototypeOf` / `Object.getPrototypeOF` (基於prototype)
- new / class / extends (基於分類)
- new / function / prototype
