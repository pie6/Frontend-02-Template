**Week11 - Component**

# 1. Component-based/Overview


**FE Architecture**
- Component-based - 擴展 html → Resue (MVVM, MVC→ UI和 data logic之間的關係)
    Component-based 決定了 Component 的重復使用率

- 架構模式


**Object vs Component**

Componet 是 Module 也是 Object(特殊Object/Module)
可以用 Tree Structure 組合，也可形成 Template

Object
    - Prop
    - Methods
    - Inherit

Component
    - Prop
    - Methods
    - Inherit
    - Attribute
    - Config & State (Config: 構結 fn 傳進的 params)
    - Event (往外傳遞)
    - Lifecylce
    - Children (Tree Structure 的必要性→描述 interface能力)


**Component 構成元素**
End User/ User(coder)

- Attribute (XML, HTML, JSX, markup language)
- Prop (利用 prop 改變 compo )
- Mehod (在JS中有getter, setter，跟 prop 的區別可以不明顯)
- Event (prop, method creator pass meg to developer， envet 則是反向由 developer pass meg to creator)



**Attribute vs Property**

Attribute → 描述性 (XML)
Property → 關係性

example: HTML

attr:
<div attribute="attr" />

prop:
div.prop = foo

```html
<!-- attr -->
<div class="cls1 cls2"></div>
<script>
// prop
let div = document.getElementByTagName('div')
div.className // cls1 cls2
</script>
```

```html
<!-- attr: string -->
<div style="color:blue" ></div>
<script>
// prop: object
let div = document.getElementByTagName('div')
div.style
</script>
```

```html
<!-- attr: string -->
<a href="//m.foo.com" ></div>
<!-- // → http or https 根據當前頁面 -->
<script>
// prop: resolve
let a = document.getElementByTagName('a')
a.herf // http://m.foo.com  (resolve url) prop
a.getAttribute('href') //m.foo.com
</script>
```


```html
<!-- attr: string -->
<input value="foo" />

<script>
// prop:
let input = document.getElementByTagName('input')
input.value // cute
input.getAttribute('value') // cute

input.value = 'bar' // attr value !== null, attr value 不變(像 default value)，改變 prop
input.value // bar
input.getAttribute('value') // cute
</script>
```

Q: attr prop 應該一致或不一致？

# 2. Component-based/ JSX

**markup/javascript 都可 access**

- JSX
- Template(markup parser)


# 5. Carousel/

<img> 可以 drag，所以用 `background-img`

16ms = 1 frame in browser

- clientX, browser 中間可 render 區域不受其它因素影響(ex:container 滾動)


# 7. Carousel/

不用移動所有 children，可以只考慮螢幕上能顯示的。
