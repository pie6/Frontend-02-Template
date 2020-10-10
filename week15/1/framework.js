export function createElement(type, attributes, ...children) {
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


export class Component {
    constructor(type) {
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

class ElementWrapper extends Component {
    constructor(type) {
        this.root = document.createElement(type)
    }
}


class TextWrapper extends Component {
    constructor(content) {
        this.root = document.createTextNode(content)
    }

}