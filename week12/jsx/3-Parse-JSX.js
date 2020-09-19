function createElement(type, attributes, ...children) {
    let el;

    if (typeof type === 'string') {
        el = new ElementWrapper(type)
    } else {
        el = new type
    }
    // obj
    for (let name in attributes) {
        el.setAttribute(name, attributes[name])
    }
    // array
    for (const child of children) {
        if (typeof child === 'string') {
            // child = document.createTextNode(child)
            child = new TextWrapper(child)
        }
        el.appendChild(child)
    }
    return el;
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(child) {
        child.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}


class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(child) {
        child.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}


class Div {
    constructor() {
        this.root = document.createElement('div')
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(child) {
        child.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

let a = <div id="xxx">
    <span>hello</span>
    <span>world</span>
</div>

// document.body.appendChild(a)

//interface
a.mountTo(document.body)

// children, Tree Structure
// var a = createElement("div", {
//     id: "xxx"
// },
// createElement("span", null, "hello"),
// createElement("span", null, "world")
