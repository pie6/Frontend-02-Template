**Week10 - LL Parsing**

# 1. LL Parsing/ Arithmetic

**Arithmetic**

詞法定義：

- TokenNumber: 1 2 3 4 5 6 7 8 9 0 .
- Operator: + - * /
- Whitespace <SP>           // ignore
- LineTerminator <LF> <CR>  // ignore

語法定義：

<E>::=
<AE><EOF>

<AE>::=
<ME>
|<AE>+<ME>
|<AE>-<ME>

<ME>::=
<NUMBER>
|<ME>*<NUMBER>
|<ME>/<NUMBER>

Terminal: <*></><NUMBER><EOF>

使用 recusive 處理 infinite


# 6. String Parsing

- Trie (重複 string save/parsing, ex: keyword search, 完全 match)
- KMP (long string 找 pattern, 部分 match)
- Wildcard (*, ? weak reg)
- Reg
- FSM
- LL/LR (多 layer 分析, LL(N) === LR(1))


# 7. String Parsing/ Dictionary Tree (Trie)

Trie 是 hash Tree 的特列


# 8. String Parsing/KMP

**string pattern**

1. 跳轉 Table
2. Match